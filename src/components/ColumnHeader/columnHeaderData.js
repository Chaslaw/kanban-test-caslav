import { v4 as uuidv4 } from 'uuid';

const headerContent = [
    {title: 'To Do', number: '(7)', dots: 'dots', id: uuidv4()},
    {title: 'In Progres', number: '(3)', dots: 'dots', id: uuidv4()},
    {title: 'Ready for Review', number: '(3)', dots: 'dots', id: uuidv4()},
    {title: 'Testing', number: '(1)', dots: 'dots', id: uuidv4()}
];

export default headerContent;