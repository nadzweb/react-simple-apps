import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';

export class GithubPage extends React.Component {

  // Since state and props are static,
  // there's no need to re-render this component
  

  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };
    return (
      <div className="col-12 col-sm-12 col-md-9">
        <Helmet
          title="Github Page"
          meta={[
            { name: 'description', content: 'Github page for users' },
          ]}
        />
        
        <H2>
          <FormattedMessage {...messages.heading} />
        </H2>
        <form onSubmit={this.props.onSubmitForm}>
          <label htmlFor="username">
            <FormattedMessage {...messages.trymeMessage} />
            <br/>
            <AtPrefix>
              <FormattedMessage {...messages.trymeAtPrefix} />
            </AtPrefix>
            <input
              id="username"
              type="text"
              placeholder="nadzweb"
              value={this.props.username}
              onChange={this.props.onChangeUsername}
            />
          </label>
        </form>
        <ReposList {...reposListProps} />
      </div>
    );
  }
}

GithubPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(GithubPage);

