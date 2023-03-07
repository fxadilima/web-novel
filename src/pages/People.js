import React, {useState, useEffect} from "react";
//import {MDXProvider} from '@mdx-js/react';
//import Content from '!@mdx-js/loader!./../mdx/intro.mdx';
import {compile, run} from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';

/*
const Intro = (props) => {
    let [intro, setIntro] = useState(null);

    const getData = async () => {
        let str1 = await fetch("/mdx/intro.mdx").then(x => x.text()).then(async (y) => {
            let code = await compile(y, {outputFormat: 'function-body'});
            const {default: Content} = await run(code, runtime);
            setIntro(Content());
            return Content();
        });

        return str1;
    };

    useEffect(() => {
        getData();
    }, []);

    if (!intro) {
        return null;
    }

    return (
        <div className="w3-panel w3-card-4">
            {intro}
        </div>
    );
};
*/

const People = () => {
    let [intro, setIntro] = useState(null);

    const getData = async () => {
        let str1 = await fetch("/mdx/people.mdx").then(x => x.text()).then(async (y) => {
            let code = await compile(y, {outputFormat: 'function-body'});
            const {default: Content} = await run(code, runtime);
            setIntro(Content());
            return Content();
        });

        return str1;
    };

    useEffect(() => {
        getData();
    }, []);

    if (!intro) {
        return null;
    }

    return (
        <div className="w3-panel w3-padding-16">
            {intro}
        </div>
    )
};

export default People;
