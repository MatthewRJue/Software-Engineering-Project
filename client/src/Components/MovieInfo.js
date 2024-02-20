import React from 'react';
import TrailerPreview from "./TrailerPreview"

const movieTitle = "title"
const movieCategory = "Now Showing"
const movieSynopsis = "it is a movie"
const movieReview = "7/10"
const movieCast = "actors"
const movieDirector = "director"
const movieProducer = "producer"
const movieRating = "R"

const Movieinfo = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={style.overlay}>
      <div style={style.modal}>
        <button style={style.closeButton} onClick={onClose}>×</button>
        <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.column}>
          <p style={styles.text}>Title: {movieTitle}</p>
        </div>
        <div style={styles.column}>
          <p style={styles.text}>Category: {movieCategory}</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.column}>
          <p style={styles.text}>Director: {movieDirector}</p>
        </div>
        <div style={styles.column}>
          <p style={styles.text}>Cast: {movieCast}</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.column}>
          <p style={styles.text}>Producer: {movieProducer}</p>
        </div>
        <div style={styles.column}>
          <p style={styles.text}>Review: {movieReview}</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.column}>
          <p style={styles.text}>MPAA-US: {movieRating}</p>
        </div>
      </div>
      <div style={styles.largeTextContainer}>
        <p style={styles.largeText}>Synopsis: {movieSynopsis}</p>
      </div>
    </div>
    <TrailerPreview embedId="rokGy0huYEA" />
      </div>
    </div>
  );
};

const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    minWidth: '600px',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
  },
  closeButton: {
    alignSelf: 'flex-end',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '550px',
    // margin: 'auto',
    marginTop: "25px",
    marginRight: "15px"
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  column: {
    flex: '1',
    marginRight: '10px',
    // Adjust last column's margin in each row
    ':last-child': {
      marginRight: '0',
    },
  },
  text: {
    margin: '0',
  },
  largeTextContainer: {
    marginTop: '20px',
  },
  largeText: {
    fontSize: '18px',
    margin: '0',
  },
};

export default Movieinfo;