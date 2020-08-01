import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import RepoCard from "../components/RepoCard";
import { getUserGithubRepos } from "../requests/github";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});

class ReposPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { repos: [] };
  }
  componentDidMount() {
    this.getReposData();
  }
  getReposData = () => {
    getUserGithubRepos()
      .then((res) => {
        console.log("getUserGithubRepos", res.data.user_repos_info);
        res.data.user_repos_info.sort((first, second) => {
          console.log(first.stargazers_count, second.stargazers_count);
          return second.stargazers_count - first.stargazers_count;
        });
        this.setState({
          repos: res.data.user_repos_info,
        });
        console.log("getUserGithubRepos2", res.data.user_repos_info);
      })
      .catch((err) => {
        console.log("getUserGithubRepos", err);
      });
  };
  render() {
    const { classes } = this.props;
    let repoGridCards =
      this.state.repos.length !== 0
        ? this.state.repos.map((repo) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={repo.id}>
                <RepoCard repo={repo} />
              </Grid>
            );
          })
        : null;
    return (
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        {repoGridCards}
      </Grid>
    );
  }
}

export default withStyles(useStyles)(ReposPage);
