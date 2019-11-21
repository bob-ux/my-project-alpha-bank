import com.vaadin.flow.component.login.LoginForm;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.dom.Element;
import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the my-design template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("my-design")
@JsModule("./my-design.js")
public class MyDesign extends PolymerTemplate<MyDesign.MyDesignModel> {

    @Id("vaadinHorizontalLayout")
    private HorizontalLayout vaadinHorizontalLayout;
    @Id("vaadinHorizontalLayout")
    private HorizontalLayout vaadinHorizontalLayout;

    /**
     * Creates a new MyDesign.
     */
    public MyDesign() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between MyDesign and my-design
     */
    public interface MyDesignModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
