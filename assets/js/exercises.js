function maxOfFive(num1, num2, num3, num4, num5) {
    return Math.max(num1, num2, num3, num4, num5);
}

function sum() {
    var nums = [1, 293, 84, 383, 582, 192, 33];
    var s = 0;
    for (i = 0; i < nums.length; i++) {
        s += nums[i];
    }
    return s;
}

function multiply() {
    var nums = [43, 14, 52, 53, 33, 3];
    var m = 1;
    for (i = 0; i < nums.length; i++) {
        m *= nums[i];
    }
    return m;
}

function factorial(num1) {
    var n = num1;
    if (n <= 0) {
        return "Please input a positive number, greater than 0."
    }
    else if (n == 1) {
        return 1;
    }
    else if (n == 2) {
        return 2;
    }
    else {
        return n * factorial(n - 1);
    }
}

function palindrome(str) {
    var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var ccount = 0;
    if (cstr === "") {
        alert("Nothing found!");
        return false;
    }
    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    }
    else {
        if (cstr.length === 1) {
            alert("Entry is a palindrome.");
            return true;
        }
        else {
            ccount = (cstr.length - 1) / 2;
        }
    }
    for (var x = 0; x < ccount; x++) {
        if (cstr[x] != cstr.slice(-1 - x)[0]) {
            return false;
        }
    }
    return true;
}

function fizzbuzz() {
    var ans = "";
    for (var i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            ans += "FizzBuzz, ";
        }
        else if (i % 3 == 0) {
            ans += "Fizz, ";
        }
        else if (i % 5 == 0) {
            ans += "Buzz, ";
        }
        else
            ans += i + ", ";
    }
    return ans;
}

function perfectNumbers(x) {
    var divArr = new Array();
    for (var i = 1; i <= x / 2; i++) {
        if (x % i == 0) {
            divArr.push(i);
        }
    }
    var sum = 0;
    for (var i = 0; i < divArr.length; i++) {
        sum += divArr[i];
    }
    if (sum == x) {
        return true;
    }
    else
        return false;
}
function perfectNumberRun() {
    var perNums = new Array();
    for (var i = 1; i <= 10000; i++) {
        if (perfectNumbers(i))
            perNums.push(i);
    }
    return perNums;
}

function happyNums(n) {
    var m, digit;
    var cycle = [];

    while (n != 1 && cycle[n] !== true) {
        cycle[n] = true;
        m = 0;
        while (n > 0) {
            digit = n % 10;
            m += digit * digit;
            n = (n - digit) / 10;
        }
        n = m;
    }
    return (n == 1);
}

function armstrong() {
    var armArr = new Array();
    var b, c;
    for (var i = 100; i < 1000; i++) {
        var ti = i, c = 0;
        while (ti > 0) {
            b = ti % 10;
            c = c + (b * b * b);
            ti = parseInt(ti / 10);
        }
        if (c == i) {
            armArr.push(i);
        }
    }
    return armArr;
}

longestWord = function () {
    var f = $("#textFile")[0];
    var r = new FileReader();
    r.onload = function (e) {
        $('#longestWord').html(findLongestWord(r.result));
    }
    r.readAsText(f.files[0]);
}
function findLongestWord(str) {
    var words = str.match(/\w[a-z]{0,}/gi);
    var longest = words[0];
    for (var x = 1; x < words.length; x++) {
        if (longest.length < words[x].length) {
            longest = words[x];
        }
    }
    return longest;
}

filterWords = function (i) {
    var f = $("#textFile")[0];
    var r = new FileReader();
    r.onload = function (e) {
        $('#filterWord').html(filterLongWords(i, r.result));
    }
    r.readAsText(f.files[0]);
}
function filterLongWords(num, str) {
    var words = str.toLowerCase().match(/\w[a-z]{0,}/gi);
    var count = 0;
    for (var n = 0; n < words.length; n++) {
        if (words[n].length > num) {
            count++;
        }
    }
    return count + " words longer than " + num;
}

function wordFreq() {
    var f = $("#textFile")[0];
    var r = new FileReader();
    r.onload = function (e) {
        $("#wordFrequency").html(wordFreqFinder(r.result));
    }
    r.readAsText(f.files[0]);
}
function wordFreqFinder(str) {
    var words = str.toLowerCase().match(/\w[a-z]{0,}/gi);  
    var hash = {};
    for (var n in words) {            
        if (hash[words[n]] == null) {  
            (hash[words[n]]) = 1      
        } else {
            (hash[words[n]])++         
        }
    };
    var wordsArranged = [];
    for (var n in hash) {              
        wordsArranged.push([n, hash[n]]);
    };
    wordsArranged.sort(function(a, b) { 
        return b[1] - a[1]
    });
    var result = "Freq List:";  
    for (var n in wordsArranged) {
        result = result + "  " + wordsArranged[n];
    };
    return result;
}

function findWord(search) {
    var f = $("#textFile")[0];
    var r = new FileReader();
    r.onload = function (e) {
        $("#specificWord").html(searchWord(search, r.result));
    }
    r.readAsText(f.files[0]);
}
function searchWord(search, str) {
    var words = str.toLowerCase().match(/\w[a-z]{0,}/gi);
    var searchS = search.toString().toLowerCase();
    var count = 0;
    for (var n = 0; n < words.length; n++) {
        if (searchS == words[n])
            count++;
    }
    return search + " appears " + count + " times."
}