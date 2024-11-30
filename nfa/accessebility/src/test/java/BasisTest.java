import com.deque.html.axecore.playwright.AxeBuilder;
import com.deque.html.axecore.results.AxeResults;
import com.deque.html.axecore.results.Rule;
import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Collections;
import java.util.List;

public class BasisTest {

    @Test
    public void test1() {

        try (Playwright playwright = Playwright.create();
             Browser browser = playwright.chromium().launch();) {
            Page page = browser.newPage();
            page.navigate("https://workshop.spirit-indianer.com");

            AxeResults accessibilityScanResults = new AxeBuilder(page).analyze();

            List<Rule> violations = accessibilityScanResults.getViolations();
            for (Rule violation : violations) {
                System.out.println(violation.toString());
            }

            assertEquals(Collections.emptyList(), violations);
        }
    }
}
