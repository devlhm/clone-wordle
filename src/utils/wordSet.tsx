import wordList from '../data/word-list.json';

export const generateWordSet = () => {
    const todayWord = wordList[Math.floor(Math.random() * wordList.length)];
    const wordSet = new Set(wordList);

    return { wordSet, todayWord };
}