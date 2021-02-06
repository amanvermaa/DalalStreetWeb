import * as React from 'react';
import { homepageSectionA, homepageSectionB } from '../../assets/Data/homeData';
import Homepage from '../Shared/Homepage';

export default function Home() {

    return (
        <React.Fragment>
            <Homepage {...homepageSectionA} />
            <Homepage {...homepageSectionB} />
        </React.Fragment>
    )
}