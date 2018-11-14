import React from 'react';
import { Container } from 'mdbreact';
import { Iframe } from "mdbreact";

const Body = () => {
    return (
        <div>
            <main>
                <Container className="text-center my-5">
                <Iframe height={250} src="https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=95D34E133DE47E7FFF5AA1F9C4B3F1CB3996&outKey=V122a288ee90aa2656a5189ad8acc5dcb98b16984ee9af152123889ad8acc5dcb98b1&controlBarMovable=true&jsCallable=true&isAutoPlay=true&skinName=tvcast_white" />
                </Container>
            </main>
        </div>
    );
};

export default Body;