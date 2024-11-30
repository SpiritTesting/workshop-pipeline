FROM node:22.3.0 AS frontend

# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chrome for Testing that Puppeteer
# installs, work.
RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /home/spirit/app
COPY frontend/*.json ./

RUN npm ci \
    && npm cache clean --force \
    && groupadd -r spirit && useradd -r -g spirit -G audio,video spirit \
    && chown -R spirit:spirit /home/spirit \
    && chown -R spirit:spirit ./node_modules \
    && chown -R spirit:spirit ./package.json \
    && chown -R spirit:spirit ./package-lock.json

COPY frontend/karma.conf.js .
COPY frontend/src ./src
USER spirit

RUN npx puppeteer browsers install chrome 

CMD ["npm", "run", "test"]