import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
public class TestUpload {

    private static WebDriver driver;

    @BeforeClass
    public static void setUpChrome() {
        //creates a new webdriver instance using chrome
        System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
        //driver =
    }

    @Test
    public void uploadImage() {

    }
}
