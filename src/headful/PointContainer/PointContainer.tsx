import React from 'react';
import styles from './PointContainer.module.scss';

type IntroContainerProps = {
    children: React.ReactNode;
};

const PointContainer = ({ children }: IntroContainerProps) => {
    return <div className={styles.pointContainer}>{children}</div>;
};

export default PointContainer;
