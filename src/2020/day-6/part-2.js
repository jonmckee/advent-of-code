export default input =>
    input
        .map(answers => {
            const allAnswers = answers.join('');

            return Array(...new Set(allAnswers)).count(
                a => allAnswers.countChar(a) === answers.length
            );
        })
        .sum();
