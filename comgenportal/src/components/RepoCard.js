import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Switch from "@material-ui/core/Switch";
import Badge from "@material-ui/core/Badge";
import StarIcon from "@material-ui/icons/Star";
import { toggleTrackGithubRepo } from "../requests/github";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const RepoCard = (props) => {
  const classes = useStyles();
  const { id, name, html_url, stargazers_count, tracking } = props.repo;
  const [state, setState] = React.useState({
    toggleStatus: tracking,
  });

  const handleChange = ({ target: { name, checked } }) => {
    //set toggleOn in component + set db value
    toggleTrackGithubRepo(id, checked)
      .then((res) => {
        console.log("toggleTrackGithubRepo", res);
        setState({ ...state, [name]: checked });
      })
      .catch((err) => {
        console.log("toggleTrackGithubRepo", err);
        setState({ ...state, [name]: checked });
      });
  };
  // const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
            <Badge badgeContent={stargazers_count} color="secondary">
              <StarIcon />
            </Badge>
          </Typography>
        </CardContent>
        <Typography>
          <Link href={html_url} rel="noopener" target="_blank">
            Repo Url
          </Link>
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.toggleStatus}
              onChange={handleChange}
              name="toggleStatus"
              color="primary"
            />
          }
          label="Track Repo"
        />
      </Card>
    </div>
  );
};

export default RepoCard;
