import { nanoid } from 'nanoid';
const getData = () => {
    return [
        {
            id: nanoid(),
            title: 'first note',
            body: 'hai',
            archived: false,
            createdAt: '20/2/2022'
        },
        {
            id: nanoid(),
            title: 'second note',
            body: 'hai',
            archived: false,
            createdAt: '22/2/2022'
        },
        {
            id: nanoid(),
            title: 'third note',
            body: 'hai',
            archived: false,
            createdAt: '24/2/2022'
        }
    ];
}
export {getData};