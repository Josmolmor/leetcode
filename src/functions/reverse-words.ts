export default function reverseWords(sentenceToReverse: string) {
    if (!sentenceToReverse) return '';
    return [...sentenceToReverse?.split(' ')].reverse().join(' ');
}