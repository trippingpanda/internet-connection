import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import ThemeOne from "../themes/theme-one";
import ThemeTwo from "../themes/theme-two";
import ThemeThree from "../themes/theme-three";
import ThemeFour from "../themes/theme-four";
import ThemeFive from "../themes/theme-five";
import ThemeSix from "../themes/theme-six";
import ThemeSeven from "../themes/theme-seven";
import ThemeEight from "../themes/theme-eight";
import ThemeNine from "../themes/theme-nine";
import AboutUs from "../components/innerSection/about/about-us";
import Pricing from "../components/innerSection/pricing/pricing";
import Reviews from "../components/innerSection/reviews/reviews";
import Faq from "../components/innerSection/faq/faq";
import Login from "../components/innerSection/login/login";
import Signup from "../components/innerSection/signup/signup";
import Download from "../components/innerSection/download/download";
import ThankYou from "../components/innerSection/thankyou/thankyou";
import Forgot from "../components/innerSection/forgot/forgot";
import Newsletter from "../components/innerSection/newsletter/newsletter";
import ErrorOne from "../components/innerSection/error/errorOne/error-one";
import ErrorTwo from "../components/innerSection/error/errorTwo/error-two";
import Contact from "../components/innerSection/contact/contact";
import Maintenance from "../components/innerSection/maintenance/maintenance";
import ComingSoon from "../components/innerSection/comingSoon/coming-soon";
import BlogTwoColumn from "../components/blogs/blog-two-column";
import BlogThreeColumn from "../components/blogs/blog-three-column";
import BlogLeftSidebar from "../components/blogs/blog-left-sidebar";
import BlogRightSidebar from "../components/blogs/blog-right-sidebar";
import BlogDetailsLeftSidebar from "../components/blogs/blog-details-left-sidebar";
import BlogDetailsRightSidebar from "../components/blogs/blog-details-right-sidebar";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ThemeOne} />
            <Route exact path="/theme-two" component={ThemeTwo} />
            <Route exact path="/theme-three" component={ThemeThree} />
            <Route exact path="/theme-four" component={ThemeFour} />
            <Route exact path="/theme-five" component={ThemeFive} />
            <Route exact path="/theme-six" component={ThemeSix} />
            <Route exact path="/theme-seven" component={ThemeSeven} />
            <Route exact path="/theme-eight" component={ThemeEight} />
            <Route exact path="/theme-nine" component={ThemeNine} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/reviews" component={Reviews} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/download" component={Download} />
            <Route exact path="/thankyou" component={ThankYou} />
            <Route exact path="/forgot" component={Forgot} />
            <Route exact path="/newsletter" component={Newsletter} />
            <Route exact path="/error-one" component={ErrorOne} />
            <Route exact path="/error-two" component={ErrorTwo} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/maintenance" component={Maintenance} />
            <Route exact path="/coming-soon" component={ComingSoon} />
            <Route exact path="/blog-two-column" component={BlogTwoColumn} />
            <Route exact path="/blog-three-column" component={BlogThreeColumn} />
            <Route exact path="/blog-left-sidebar" component={BlogLeftSidebar} />
            <Route exact path="/blog-right-sidebar" component={BlogRightSidebar} />
            <Route exact path="/blog-details-left-sidebar" component={BlogDetailsLeftSidebar} />
            <Route exact path="/blog-details-right-sidebar" component={BlogDetailsRightSidebar} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;