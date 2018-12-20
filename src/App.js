import React, { Component } from "react";
import Scrollchor from "react-scrollchor";

import "./index.css";
import "./Flex.css";
import "./Header.css";
import "./Main_Body.css";

class Navigation_Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Current_Class: this.props.Current
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      Current_Class: nextProps.Current
    });
  }

  render() {
    return (
      <div
        style={{ width: "100%", justifyContent: "center" }}
        className={`flex ${this.state.Current_Class}`}
      >
        <span onClick={this.props.OnClickFunction}>
          <Scrollchor to={`#${this.props.href}`} className={"Navhref"}>
            {this.props.NavBoxText}
          </Scrollchor>
        </span>
      </div>
    );
  }
}

class Main_Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      One: this.props.NavStates.One,
      Two: this.props.NavStates.Two,
      Three: this.props.NavStates.Three,
      Four: this.props.NavStates.Four,
      Five: this.props.NavStates.Five
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      One: nextProps.NavStates.One,
      Two: nextProps.NavStates.Two,
      Three: nextProps.NavStates.Three,
      Four: nextProps.NavStates.Four,
      Five: nextProps.NavStates.Five
    });
  }

  Change_CurrentNav = Number => {
    this.setState({
      One: "NavBox",
      Two: "NavBox",
      Three: "NavBox",
      Four: "NavBox",
      Five: "NavBox"
    });

    this.setState({
      [Number]: "NavBoxCurrent"
    });
  };

  render() {
    return (
      <div id={"Main_Header"} className={"flex"}>
        <div id={"NavBoxDiv"}>
          <Navigation_Box
            NavBoxText={"Mission"}
            Current={this.state.One}
            href={"Mission"}
            OnClickFunction={() => this.Change_CurrentNav("One")}
          />
          <Navigation_Box
            NavBoxText={"Award Abstract"}
            Current={this.state.Two}
            href={"AwardAbstract"}
            OnClickFunction={() => this.Change_CurrentNav("Two")}
          />
          <Navigation_Box
            NavBoxText={"Project Personnel"}
            Current={this.state.Three}
            href={"ProjectPersonnel"}
            OnClickFunction={() => this.Change_CurrentNav("Three")}
          />
          <Navigation_Box
            NavBoxText={"Publications"}
            Current={this.state.Four}
            href={"Publications"}
            OnClickFunction={() => this.Change_CurrentNav("Four")}
          />
          <Navigation_Box
            NavBoxText={"Demonstration"}
            Current={this.state.Five}
            href={"Demonstration"}
            OnClickFunction={() => this.Change_CurrentNav("Five")}
          />
        </div>
      </div>
    );
  }
}

class Mobile_Header_NavBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        onClick={this.props.OnClickClose}
        style={{ width: "100%", justifyContent: "center" }}
        className={`MobileNavBox flex ${this.props.NavClass}  ${this.props.NavBoxShown}`}
      >
        <span>
          <Scrollchor to={`#${this.props.href}`} className={"MobileNavhref"}>
            {this.props.NavBoxText}
          </Scrollchor>
        </span>
      </div>
    );
  }
}

class Mobile_Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MobileNavBool: false,
      MobileNavShown : 'hide'
    };
  }

  RevealMobileNav = () => {
    if (this.state.MobileNavBool) {
      this.setState({
        MobileNavBool: false,
        MobileNavShown: 'hide'
      })
    } else {
      this.setState({
        MobileNavBool: true,
        MobileNavShown: ''
      })
    }
  }

  OnClickClose = () => {
    if (this.state.MobileNavBool) {
      this.setState({
        MobileNavBool: false,
        MobileNavShown: 'hide'
      })
    }
  }

  render() {
    
    return (
      <div id={"Mobile_Header"}>
        <div id={'Mobile_Nav'}>
          <div id={'MobileNavIcon'}><i class="fas fa-bars" onClick={() => this.RevealMobileNav()}></i></div>
          <Mobile_Header_NavBox href={'Mission'} NavBoxText={'Mission'} NavClass={'MobileMission'} NavBoxShown={this.state.MobileNavShown} OnClickClose={ () => this.OnClickClose()} />
          <Mobile_Header_NavBox href={'AwardAbstract'} NavBoxText={'Award Abstract'} NavClass={'MobileAward'} NavBoxShown={this.state.MobileNavShown} OnClickClose={ () => this.OnClickClose()} />
          <Mobile_Header_NavBox href={'ProjectPersonnel'} NavBoxText={'Project Personnel'} NavClass={'MobilePersonnel'} NavBoxShown={this.state.MobileNavShown} OnClickClose={ () => this.OnClickClose()} />
          <Mobile_Header_NavBox href={'Publications'} NavBoxText={'Publications'} NavClass={'MobilePublications'} NavBoxShown={this.state.MobileNavShown} OnClickClose={ () => this.OnClickClose()} />
        </div>
      </div>
    );
  }
}

class Mission_Statement extends Component {
  constructor(props) {
    super(props);

    this.scrollHandler = this.scrollHandler.bind(this);

    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
    this.scrollHandler();
  }

  scrollHandler() {
    if (
      window.scrollY + window.innerHeight >
      this.Mission_Statement.offsetTop
    ) {
      if (this.state.visible != true) {
        this.setState({ visible: true });
      }
      this.props.ChangeNavFunction("One");
    }
  }

  render() {
    const hide_class = this.state.visible
      ? "Mission_Statement"
      : "Mission_Statement hide";
    return (
      <div id={"Mission"} className={`flex Section ${hide_class}`}>
        <span id={"Title"}>CICI</span>
        <span
          ref={span => {
            this.Mission_Statement = span;
          }}
          id={"LesserTitle"}
        >
          Implementing CYBEX-P
        </span>
        <span id={"TitleDesc"}>
          Helping Organizations to Share with Privacy Preservation
        </span>
        <span className={"Section_Title"}>Mission</span>
        <span>
          The purpose of our project is to reward value to organizations who
          contribute meaningful cybersecurity threat data to the service.
          Without the organization's contributions, the service loses value.
          Without the service, the organization is losing the opportunity cost
          of access to cybersecurity threat data and analysis they would not
          have otherwise.
        </span>
      </div>
    );
  }
}

class Award_Abstract extends Component {
  constructor(props) {
    super(props);

    this.scrollHandler = this.scrollHandler.bind(this);

    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
    this.scrollHandler();
  }

  scrollHandler() {
    if (window.scrollY + window.innerHeight > this.Award_Abstract.offsetTop) {
      if (this.state.visible != true) {
        this.setState({ visible: true });
      }
      this.props.ChangeNavFunction("Two");
    }
  }

  render() {
    const hide_class = this.state.visible
      ? "Award_Abstract"
      : "Award_Abstract hide";
    return (
      <div id={"AwardAbstract"} className={`flex Section ${hide_class}`}>
        <span className={"Section_Title"}>Award Abstract</span>
        <span
          id={"Award_Text"}
          // style={{ paddingTop: "20px" }}
          ref={span => {
            this.Award_Abstract = span;
          }}
        >
          In response to the increasing number of attacks on cyberspace, public
          and private organizations are encouraged to share their cyber-threat
          information and data with each other. Although there are long-term
          interests in sharing security related information, it places
          organizations at risk regarding the protection of their data and
          exposure of other vulnerabilities. This project designs, develops and
          implements a CYBersecurity information EXchange with Privacy (CYBEX-P)
          platform using trusted computing paradigms and privacy-preserving
          information sharing mechanisms for cybersecurity enhancement and
          development of a robust cyberinfrastructure. The outcome of this
          project has a broader impact on the development of a novel
          cybersecurity information-sharing platform with privacy preservation
          and a robust governance structure. The project also has direct impact
          on undergraduate and graduate student education and training,
          emphasizing the engineering development of minorities and women, by
          providing a real-world platform for investigation and management of
          cyber threats.
          <br />
          <br /> Envisioning that effective and privacy-preserving threat
          intelligence sharing can be instrumental for auditing the state of the
          threat landscape and helping to predict and prevent major
          cyber-attacks, this project provides a service for structured
          information exchange. The CYBEX-P platform provides valuable
          measurable information about the security status of systems and
          devices together with data about incidents stemming from
          cyber-attacks. To develop and implement such an environment across
          statewide organizations, then across the nation, this research project
          incorporates blind processing, privacy preservation and integrity of
          shared incident data by ensuring that only trusted processes access
          the raw data and only anonymized data are shared with other operators.
          Blind processing enables the advantages of additional information
          exchange while respecting organizational constraints and trust
          boundaries. This research also establishes a flexible governance
          framework that includes both policies and procedures to protect the
          data and provide all customers with the tools to demonstrate they are
          complying with both regulatory and internal data governance
          requirements. Specifically, the outcomes of the project demonstrate:
          i) CYBEX-P infrastructure development with affordable scalability,
          secure data exchange, and analytic components, ii) Privacy-preserving
          information sharing via blind processing and anonymization, and an
          iii) CYBEX-P governance framework.
        </span>
      </div>
    );
  }
}

class Project_Personnel extends Component {
  constructor(props) {
    super(props);

    this.scrollHandler = this.scrollHandler.bind(this);

    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
    this.scrollHandler();
  }

  scrollHandler() {
    if (
      window.scrollY + window.innerHeight >
      this.Project_Personnel.offsetTop
    ) {
      if (this.state.visible != true) {
        this.setState({ visible: true });
      }
      this.props.ChangeNavFunction("Three");
    }
  }

  render() {
    const hide_class = this.state.visible
      ? "Project_Personnel"
      : "Project_Personnel hide";
    return (
      <div id={"ProjectPersonnel"} className={`flex Section ${hide_class}`}>
        <span className={"Section_Title"}>Project Personnel</span>
        <div
          id={"Project_Personnel_Text"}
          ref={div => {
            this.Project_Personnel = div;
          }}
        >
          <span className={"Project_Personnel_Heading"}>Investigators</span>
          <span className={"Personnel"}>
            Shamik Sengupta (Principal Investigator)
          </span>
          <span className={"Personnel"}>
            Mehmet Gunes (Co-Principal Investigator)
          </span>
          <span className={"Personnel"}>
            Nancy Latourrette (Co-Principal Investigator)
          </span>
          <span className={"Personnel"}>
            Jeff Springer (Co-Principal Investigator)
          </span>
          <span className={"Personnel"}>
            Ming Li (Former Co-Principal Investigator)
          </span>
          <span className={"Project_Personnel_Heading"}>Research Team</span>
          <span className={"Personnel"}>Farhan Sadique</span>
          <span className={"Personnel"}>Shahriar Badsha</span>
          <span className={"Personnel"}>Ahmet Ksoy</span>
          <span className={"Personnel"}>Ankita Thakkar</span>
          <span className={"Personnel"}>Batyr Charyyev</span>
          <span className={"Personnel"}>Khalid Bakhshaliyev</span>
          <span className={"PM_Personnel_Heading"}>Project Manager</span>
          <span className={"Personnel"}>Noah Rotroff</span>
        </div>
      </div>
    );
  }
}

class Publications extends Component {
  constructor(props) {
    super(props);

    this.scrollHandler = this.scrollHandler.bind(this);

    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
    this.scrollHandler();
  }

  scrollHandler() {
    if (window.scrollY + window.innerHeight > this.Publications.offsetTop) {
      if (this.state.visible != true) {
        this.setState({ visible: true });
      }
      this.props.ChangeNavFunction("Four");
    }
  }

  render() {
    const hide_class = this.state.visible
      ? "Publications_Section"
      : "Publications_Section hide";
    return (
      <div id={"Publications"} className={`flex Section ${hide_class}`}>
        <span className={"Section_Title"}>Current Publications</span>
        <div
          id={"Publications_Text"}
          ref={div => {
            this.Publications = div;
          }}
        >
          <span className={"Publication_Span"}>
            <a
              className={"Publication_Link"}
              target={"_blank"}
              href={
                "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1528167&HistoricalAwards=false"
              }
            >
              NSF Award
            </a>
          </span>
        </div>
      </div>
    );
  }
}

class Main_Body extends Component {
  render() {
    return (
      <div id="Main_Body" className={"flex"}>
        <Mission_Statement ChangeNavFunction={this.props.ChangeNavFunction} />
        <Award_Abstract ChangeNavFunction={this.props.ChangeNavFunction} />
        <Project_Personnel ChangeNavFunction={this.props.ChangeNavFunction} />
        <Publications ChangeNavFunction={this.props.ChangeNavFunction} />
      </div>
    );
  }
}

class App extends Component {
  palette = ["#4717F6", "#1E1926", "#FDFFFF", "#B10F2E", "#570000"];

  constructor(props) {
    super(props);
    this.state = {
      NavStates: {
        One: "NavBox",
        Two: "NavBox",
        Three: "NavBox",
        Four: "NavBox",
        Five: "NavBox"
      }
    };
  }

  Change_CurrentNav = Number => {
    this.setState({
      NavStates: {
        One: "NavBox",
        Two: "NavBox",
        Three: "NavBox",
        Four: "NavBox",
        Five: "NavBox"
      }
    });

    this.setState({
      NavStates: {
        [Number]: "NavBoxCurrent"
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Main_Header NavStates={this.state.NavStates} />
        <Mobile_Header />
        <Main_Body ChangeNavFunction={this.Change_CurrentNav} />
      </div>
    );
  }
}

export default App;
