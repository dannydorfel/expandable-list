import React from 'react'

import styles from './collapsed.css'

const Collapsed = React.createClass({
    render() {
        var {data} = this.props;
        return (
            <div role="title" className={styles.root}>
              {data.title}
            </div>
        )
    }
});

export default Collapsed
