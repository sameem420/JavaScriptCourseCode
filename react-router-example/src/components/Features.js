import { useParams, useRouteMatch, Link, Route, Switch } from 'react-router-dom';

function Features() {
    let match = useRouteMatch();
    return(
      <div className="App">
        <h1>Features</h1>
        <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        {/* <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route> */}
      </Switch>
      </div>
    )
  }

  function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
  }
  export default Features;