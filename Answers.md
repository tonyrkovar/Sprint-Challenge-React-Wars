# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    REact JS is a library created by Facebook. React was built in order to help developers be able to more easily build UI's. Reacts JSX makes it incredibly easy to contain all of your code in one place and be able to keep track of what is going on. Then adding in frameworks and libraries is incredibly efficent for helping you to make a clean and quickly put together website.  

1. What does it mean to think in react?

    The thought that immediattely comes to mind is "reactive". React seems to be incredibly efficent at parsing out data and various forms of data management so that you can create reusable components to keep your code DRY and easy to manage. 

1. Describe state.

    State is ... the current status of the your information. With state you can create a variable that uses a call back to set it, allowing you to have a dynamic variable that can be changed with information gathered from the user or from you API in order to manipulate your code. 

1. Describe props.

    Props are something that I have a bit of trouble wrapping my head around. But from what I've been able to grab props are... properties? of the data you're passing in. For example as we're making the cards in class we're getting information from an API, passing it into our state. And then using that information to build out the cards. 

    But since we want the card to be reusable we have a component that uses props to fill in the data. So when we use state to call the information we're laying out our data as a key/value pair to allow props to have a key to reference and pull the appropriate data from. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

    side effects are the events that are actived when you call code. There are two types of side effects one's that need to be cleaned and ones that don't. Side effects are synchd in a react component via useState allowing us to maintain a consistent data state while manipulating it manually. 

    