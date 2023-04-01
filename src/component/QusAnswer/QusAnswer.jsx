import React from 'react';
import './QusAnswer.css'

const QusAnswer = () => {
    return (
        <div className='qus-answer-container'>
            <div className="odd">
                <h3>Props vs state</h3>
                <p>Ans:
                    Props: Props are read-only,Immutable & it allows to pass data from one component to other components as an argument.
                    <br/>
                    State: State is mutable & it holds information about the components that can be changeable. State takes a Initial value that will changed by a setter function.
                     </p>
            </div>
            <div className="even">
                <h3>How does useState work?</h3>
                <p>Ans: useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            </div>
            <div className="odd">
                <h3>Purpose of useEffect other than fetching data.</h3>
                <p>Ans: useEffect is used to execute functions after a component gets rendered (to “perform side effects”).useEffect can be limited to cases where a selected set of values change. These values are referred to as dependencies.<br/>
                The useEffect hook will make a network request on component render. When that fetch resolves, it will set the response from the server to the local state using the setState function. This, in turn, will cause the component to render so as to update the DOM with the data.</p>
            </div>
            <div className="even">
                <h3>How Does React work?</h3>
                <p>Ans: A team of Facebook developers realized that the DOM is slow.to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.<br/>
                Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.<br/>Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.</p>
            </div>
            


        </div>
    );
};

export default QusAnswer;