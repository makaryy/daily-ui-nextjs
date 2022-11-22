import React from "react";
import Player from "../../components/MusicPlayer/MusicPlayer";
import Page from "../../components/Page";
import Wrapper from "../../components/Wrapper";

const Day009 = () => {
    return (
        <Page>
            <Wrapper className="text-brand-text flex-row">
                <Player />
            </Wrapper>
        </Page>
    );
};

export default Day009;
