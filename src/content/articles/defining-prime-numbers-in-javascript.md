---
title: Определение простых чисел в JavaScript
layout: ../../layouts/ArticleEntry.astro
categories: [javascript]
pubDate: 2024-03-12
description: Определение простых чисел в JavaScript
keywords: javascript
---

Определение того, является ли число простым или нет, является одной из базовых задач в математике и программировании. 

**Простые числа** - это натуральные числа больше 1, которые имеют ровно два делителя: 1 и само число. 

<table width="100%">
  <thead>
    <tr>
      <th colspan="8">Простые числа до 997</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2</td><td>3</td><td>5</td><td>7</td><td>11</td><td>13</td><td>17</td><td>19</td>
    </tr>
    <tr>
      <td>23</td><td>29</td><td>31</td><td>37</td><td>41</td><td>43</td><td>47</td><td>53</td>
    </tr>
    <tr>
      <td>59</td><td>61</td><td>67</td><td>71</td><td>73</td><td>79</td><td>83</td><td>89</td>
    </tr>
    <tr>
      <td>97</td><td>101</td><td>103</td><td>107</td><td>109</td><td>113</td><td>127</td><td>131</td>
    </tr>
    <tr>
      <td>137</td><td>139</td><td>149</td><td>151</td><td>157</td><td>163</td><td>167</td><td>173</td>
    </tr>
    <tr>
      <td>179</td><td>181</td><td>191</td><td>193</td><td>197</td><td>199</td><td>211</td><td>223</td>
    </tr>
    <tr>
      <td>227</td><td>229</td><td>233</td><td>239</td><td>241</td><td>251</td><td>257</td><td>263</td>
    </tr>
    <tr>
      <td>269</td><td>271</td><td>277</td><td>281</td><td>283</td><td>293</td><td>307</td><td>311</td>
    </tr>
    <tr>
      <td>313</td><td>317</td><td>331</td><td>337</td><td>347</td><td>349</td><td>353</td><td>359</td>
    </tr>
    <tr>
      <td>367</td><td>373</td><td>379</td><td>383</td><td>389</td><td>397</td><td>401</td><td>409</td>
    </tr>
    <tr>
      <td>419</td><td>421</td><td>431</td><td>433</td><td>439</td><td>443</td><td>449</td><td>457</td>
    </tr>
    <tr>
      <td>461</td><td>463</td><td>467</td><td>479</td><td>487</td><td>491</td><td>499</td><td>503</td>
    </tr>
    <tr>
      <td>509</td><td>521</td><td>523</td><td>541</td><td>547</td><td>557</td><td>563</td><td>569</td>
    </tr>
    <tr>
      <td>571</td><td>577</td><td>587</td><td>593</td><td>599</td><td>601</td><td>607</td><td>613</td>
    </tr>
    <tr>
      <td>617</td><td>619</td><td>631</td><td>641</td><td>643</td><td>647</td><td>653</td><td>659</td>
    </tr>
    <tr>
      <td>661</td><td>673</td><td>677</td><td>683</td><td>691</td><td>701</td><td>709</td><td>719</td>
    </tr>
    <tr>
      <td>727</td><td>733</td><td>739</td><td>743</td><td>751</td><td>757</td><td>761</td><td>769</td>
    </tr>
    <tr>
      <td>773</td><td>787</td><td>797</td><td>809</td><td>811</td><td>821</td><td>823</td><td>827</td>
    </tr>
    <tr>
      <td>829</td><td>839</td><td>853</td><td>857</td><td>859</td><td>863</td><td>877</td><td>881</td>
    </tr>
    <tr>
      <td>883</td><td>887</td><td>907</td><td>911</td><td>919</td><td>929</td><td>937</td><td>941</td>
    </tr>
    <tr>
      <td>947</td><td>953</td><td>967</td><td>971</td><td>977</td><td>983</td><td>991</td><td>997</td>
    </tr>
  </tbody>
</table>

### Перебор делителей

Один из простых способов определить, является ли число простым или нет, - это перебрать все возможные делители числа и проверить их. Если у числа есть делитель, отличный от 1 и самого числа, то оно не является простым.

```javascript
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Пример использования:
console.log(isPrime(2));   // true
console.log(isPrime(992)); // false
```

Этот метод эффективен, когда нужно определить простоту небольших чисел.

### Решето Эратосфена

**Решето Эратосфена** - это алгоритм, который приписывают древнегреческому математику Эратосфену Киренскому, и который позволяет найти все простые числа в заданном диапазоне. Метод Решето Эратосфена основан на идее исключения кратных чисел.

```javascript
function sieveOfEratosthenes(max) {
    let sieve = [];
    let primes = [];
    for (let i = 2; i <= max; i++) {
        if (!sieve[i]) {
            primes.push(i);
            for (let j = i * 2; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

// Пример использования:
console.log(sieveOfEratosthenes(30)); [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```

Этот метод эффективен для поиска всех простых чисел в большом диапазоне.