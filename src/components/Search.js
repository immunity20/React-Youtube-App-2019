import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { css } from 'emotion';

const classes = {
  root: css`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 400;
  `,
  input: css`
  margin-left: 10px;
  flex: 1;
  `,
  inconButton: css`
  padding: 10px;
  `,
  divider: css`
  height: 28px;
  margin: 4px;
  `,
}

const Search = (props) => {
    const [text, setText] = useState('');
    return (
      <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Youtube"
        inputProps={{ 'aria-label': 'search youtube videos' }}
        value={text || ''}
        onChange={(e) => setText(e.target.value)}
      />
        <Divider className={classes.divider} orientation="vertical" />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    );
};

export default Search;
