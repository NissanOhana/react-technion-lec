export type FaqContent = {
    question: string;
    answer: string;
}

export const faqContent: FaqContent[] = [
    {
        question: 'Where to start?',
        answer: 'In the repo of the project, you can navigate between the different branches',
    },
    {
        question: 'Where is an example of useState?',
        answer: 'In almost every component. You can see it starting from branch 5',
    },
    {
        question: 'Where is an example of useEffect?',
        answer: 'In # 10, you can see a call to useEffect, which means "Perform the action when the component first goes up." The operation is fetch from an external server (yes, it is inefficient 🤓).',
    },
    {
        question: 'Where is a map example for a component?',
        answer: 'Found in FAQ, Amigos and Navbar. There is a mapping on a list, and each member in the list is returned compenante with props accordingly.',
    },
    {
        question: `Im not having fun with css, what do I do?`,
        answer: 'Read about flexbox. This is a basic software that makes order. Google short and you will find an answer. In addition, Sass can be used. CSS with superpowers. Here too, Google.',
    },
    {
        question: `You're naughty! Every time I refresh the page, my characters disappear. What to do?!`,
        answer: 'Well, of course. We did not store the information on an external server, nor did we use localStorage. Read about the different solutions, and where else you can take the project forward - user authentication, add more information about each character and save it on the server, see other users characters and more.',
    }
]
    
