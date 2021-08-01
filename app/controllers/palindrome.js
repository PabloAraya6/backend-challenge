const defaultData = "afoolishconsistencyisthehobgoblinoflittlemindsadoredbylittlestatesmenandphilosophersanddivineswithconsistencyagreatsoulhassimplynothingtodohemayaswellconcernhimselfwithhisshadowonthewallspeakwhatyouthinknowinhardwordsandtomorrowspeakwhattomorrowthinksinhardwordsagainthoughitcontradicteverythingyousaidtodayahsoyoushallbesuretobemisunderstoodisitsobadthentobemisunderstoodpythagoraswasmisunderstoodandsocratesandjesusandlutherandcopernicusandgalileoandnewtonandeverypureandwisespiritthatevertookfleshtobegreatistobemisunderstood"
var result = {
    data: [],
    count: 0
}

const findAllPalindromeInSubstrings = async (input, j, k) => {
    let count = 0;
    while (j >= 0 && k < input.length) {
        if (input[j] != input[k]) {
            break;
        }
        result.data.push(input.substring(j, k + 1));
        count++;
        j--;
        k++;
    }
    return count;
};

const findAllPalindromeSubstrings = async (input) => {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        count += await findAllPalindromeInSubstrings(input, i - 1, i + 1);
        count += await findAllPalindromeInSubstrings(input, i, i + 1);
    }
    return count;
};

const palindrome = async (req, res, next) => {
    try {
        const data = await findAllPalindromeSubstrings(defaultData);
        const dataNoRepeat = [... new Set(result.data)]
        const resultDataRepeat = {
            info: 'Array with repeat palindrome strings',
            data: result.data,
            count: `Total repeat palindrome strings: ${data}`
        }
        const resultData = {
            info: 'Array with non-repeat palindrome strings',
            data: dataNoRepeat,
            count: `Total non-repeat palindrome ${dataNoRepeat.length}`
        }
            

        res.status(200).json({message:'success', data_repeat: resultDataRepeat, data_non_repeat: resultData})
    } catch (error) {
        next(error)
    }
}

module.exports = palindrome