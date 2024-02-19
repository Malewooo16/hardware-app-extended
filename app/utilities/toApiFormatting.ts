export default function formatApiSentence(sentence:string) {
    // Split the sentence into words
    const words = sentence.split('%20');
  
    // Lowercase each word
    const lowercaseWords = words.map((word) => word.toLowerCase());
  
    // Join the words with a dash
    const formattedSentence = lowercaseWords.join('-');
  
    return formattedSentence;
  }
  
 
  