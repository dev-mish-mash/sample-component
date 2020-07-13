import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import testImg from '../static/testImg.png';
import styled from 'styled-components';

const LogoImg = styled.img`
    width : 8rem;
    height: 4rem;
    border-radius: 1rem;
    padding: 0 0 10px 0;
    margin : 0 40px 0 0;
`;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    newStyle: {
        border: 0,
        fontSize: 15,
        borderRadius: 3,
        color: 'white',
        height: 25,
        padding: '0 10px',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 2px 2px 2px rgba(33, 203, 243, .3)',
        margin: '0 10px 0 10px'
    }
}));

const GNB = () => {
    const classes = useStyles();
    const trigger = useScrollTrigger();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        서비스 전문 개발 TEAM CRUNCH
                    </Typography>
                    <Button color="inherit" >고객사</Button>
                    <Button color="inherit" >가이드</Button>
                    <Button color="inherit" >로그인</Button>
                </Toolbar>
                <Toolbar>
                    <LogoImg src={testImg} loading='lazy' />
                    <Button className={classes.newStyle}>팀 소개</Button>
                    <Button className={classes.newStyle}>멤버 소개</Button>
                    <Button className={classes.newStyle}>프로젝트 소개</Button>
                    <Button className={classes.newStyle}>비용 산정</Button>
                    <Button className={classes.newStyle}>문의</Button>
                </Toolbar>
            </AppBar>
            <Slide appear={false} direction="down" in={trigger}>
                <AppBar>
                    <Toolbar>
                        <LogoImg src={testImg} loading='lazy' />
                        <Button className={classes.newStyle}>팀 소개</Button>
                        <Button className={classes.newStyle}>멤버 소개</Button>
                        <Button className={classes.newStyle}>프로젝트 소개</Button>
                        <Button className={classes.newStyle}>비용 산정</Button>
                        <Button className={classes.newStyle}>문의</Button>
                    </Toolbar>
                </AppBar>
            </Slide >
        </div >
    );
}

export default GNB;