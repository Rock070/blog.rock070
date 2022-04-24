---
title: Hash Table
date: 2022-04-22 02:03:57
categories: data structure
---

## 為什麼要有 Hash Table?

先想一下，若有 10 幾筆資料，記錄了棒球員的編號、姓名與年薪。
要搜尋編號 100 的球員年薪，要如何做搜尋？
最簡單且最直接的就是從索引 1 開始逐一搜尋，直到找到編號 100 的球員。
這樣的做法可說是暴力，會花費很多的時間，**時間複雜度為 O**(**n**)。

| 索引 |  姓名  |  編號  | 年薪（萬美金）|
| ----- | ----- | -----  | ----- |
| 1     | Ricky    |   38  | 50 |
| 2     | Rock     |   4   | 90 |
| 3     | Johnson  |  222  | 92 |
| 4     | Jack     |    1  | 22 |
| 5     | Rebacca  |    5  | 44 |
| 6     | Tom      |   99  | 65 |
| 7     | Nick     |  100  | 43 |
| 8     | Jason    |  555  | 93 |
| 9     | Peter    |  666  | 92 |
| 10    | Lulu     |   49  | 67 |
| 11    | Vincent  |   77  |101 |
| 12    | Peggy    |  333  | 42 |
| 13    | George   |  664  | 26 |

若將資料整理成 Array 的格式，將編號與索引對在一起，直接透過 index 就可以取得資料，如: Arr[100] 可得到編號 100 的球員資料，這個做法可以提高搜尋的速度，**時間複雜度：O(1)。**

但這樣，各個球員索引中間的空間也都被佔用了，**會花費相當大的記憶體空間**。

| 索引 |  姓名  |  編號  | 年薪（萬美金）|
| ----- | ----- | -----  | ----- |
| 1     | Jack     |    1  | 22 |
| ..... | ......   | ......| .. |
| 4     | Rock     |   4   | 90 |
| 5     | Rebacca  |    5  | 44 |
| ..... | ......   | ......| .. |
| 38     | Ricky    |   38  | 50 |
| ..... | ......   | ......| .. |
| 49    | Lulu     |   49  | 67 |
| ..... | ......   | ......| .. |
| 77    | Vincent  |   77  |101 |
| ..... | ......   | ......| .. |
| 99     | Tom      |   99  | 65 |
| 100     | Nick     |  100  | 43 |
| ..... | ......   | ......| .. |
| 222     | Johnson  |  222  | 92 |
| ..... | ......   | ......| .. |
| 333    | Peggy    |  333  | 42 |
| ..... | ......   | ......| .. |
| 555     | Jason    |  555  | 93 |
| ..... | ......   | ......| .. |
| 664    | George   |  664  | 26 |
| ..... | ......   | ......| .. |
| 666     | Peter    |  666  | 92 |

上述的兩個方法，都會導致不如意的情況：

1. 速度快，但記憶體佔用多
2. 記憶體佔用少，但速度快

Hash Table 就是用來解決這個兩難的情況，他可以同時節省空間的佔用，也可以節省時間。

## Hash Function

Hash 的概念在電腦科學中被普遍應用，簡單來說，就是把一個值換成另外一個值。

>如：apple => !@!2∂∑œ–¡™¡

世界上有成千上萬種 Hash Function，應用在不同的情境：如：密碼存放到資料庫前，會先經過 Hash Function 處理，將你的密碼改成一串亂碼，如：`123456` 經過 hash function 處理變成 `@dsop™£åß∂¡`，對於資料庫管理員來說沒有辦法一眼就記下正確的密碼，且發生資料外洩事件的時候，只要不知道 hash 的方式，駭客也無法存取你真正的密碼；JavaScript 的 Object 與 Array 也被經過 Hash(Todo)

>那 Hash Funtion 可以對前面搜尋球員資料的方式有什麼幫助呢？

以上面的例子來說，Array 中最大的球員編號為 666，代表需要使用 666 個空間，但實際球員只有 13 個。
但如果我們可以透過 hash function 把球員編號都縮小的話呢？例如：把 666 改成 89，這樣就可以有效地減少使用空間，且同時擁有快速搜尋的便利。

## Division Method 除法方法

| 名字 | ID |
| ----- | ----- |
| Mike  |  11424 |
| Drake  |  4174 |
| James  |  6253 |
| Kevin  |  554 |

假設有一個 hashtable，size = 6

>Division Method 
>
>index = Key % hashtable size 

```
m: hash table 的長度
n: 要放進 hash table 內的元素量 
m >= n
```

m = 6
n = 4

套用上面的公式，把 ID 除以 hashtable 長度取餘數，這樣得到的值會介於 0 ~ hashtable.length。

| 名字    |   ID   | ÷ 6 的餘數 |
|  ----- |  ----- |   -----   |
| Mike   |  11424 |     0     |
| Drake  |  4171  |     1     |
| James  |  6253  |     1     |
| Kevin  |  554   |     2     |

>但這樣，Drake 跟 James 的值不就一樣都是 1 了嗎？沒錯，這時候就發生了衝突（collision）。

衝突（Collision）：當 hashtable 內經過 hash 後的值，有至少兩個以上的值相同，就稱作衝突。

Load Factor：m / n

- Load Factor 的值越小，衝突的機率越低，越多未使用的空間。
- Load Factor 的值越大，衝突的機率越大，越少未使用的空間。
- 0 < Load Factor < 1

4 / 6 = 2 / 3

Division Method 

優點 

- 速度快

缺點

- hash table 的大小需盡量遠離 2 的次方值，若選擇 2 的次方值，較容易發生衝突，以下為例，若選擇吧 8 為 hash table 的大小，就發生了很多的衝突：

```js
[10123, 123125, 5325, 6435, 1235, 12224, 42145].map(node => node % 8)
[3, 5, 5, 3, 3, 0, 1]
```

- 若命名的規範很類似，就越容易發生衝突：若不是用 ID 而是用 Name 來做 key，需要先換成數字再轉進 hash - table (到 hash table 程式碼才會比較理解)

## Multiplication Method (乘法)

| 名字 | ID |
| ----- | ----- |
| Mike  |  11424 |
| Drake  |  4174 |
| James  |  6254 |
| Kevin  |  554 |

假設有一個 hashtable，size = 6

>Multiplication Method 
>
>index = [m(keyA % 1)]

A = (√5 - 1) / 2

```
A 是無理數
Key * A % 1 介於 0 ~ 1
再乘以 m 將會介於 0 ~ (m - 1)
Math.floor
```

```
m: hash table 的長度
n: 要放進 hash table 內的元素量 
m >= n
```
```js
const arr2 = [11424, 4171, 6254, 554]

const A = (Math.sqrt(5) - 1) / 2


arr2.map(node => {
 return Math.floor((node * A) % 1 *  6)
})

// [2, 4, 1, 2]
```

| 名字    |   ID   | hash function（乘法方法） 後的 index |
|  ----- |  ----- |   -----   |
| Mike   |  11424 |     2     |
| Drake  |  4171  |     4     |
| James  |  6254  |     1     |
| Kevin  |  554   |     2     |


m = 6
n = 4

- 還是會有衝突
- 但衝突的機率較 division method 小

## 如何處理衝突（collision）

- chaining

若 hash function 後，產生同樣的值，則用 array 的方式記錄

|  index    | 名字      |   ID   | hash function（乘法方法） 後的 index |
|   -----   |  -----   |  ----- |   -----   |
|     0     |    []    |        |           |
|     1     | [James]  |  6254  |     1     |
|     2     | [Mike, Kevin]   |  [11424, 554] |     2     |
|     3     |    []    |        |           |
|     4     | [Drake]  |  4171  |     4     |
|     5     |    []    |        |           |


- 因為 chaning 處理衝突的特向，所以處理後的 hash table 都是二維陣列。

```js
[
  [],
  [James],
  [Mike,
  Kevin],
  [],
  [Drake],
  [],
]
```
## 實作一個 Hash Table

```js
const hashTable = (size) => {
  let table = [];
  for (let i = 0; i < size; i++) {
    table.push([]);
  }
  // division method
  const hash1 = key => {
    return key % size
  }  

  // multiplication method
  const hash2 = key => {
    A = (Math.sqrt(5) - 1) / 2
    return Math.floor(size * ((key * A) % 1))
  }

  const set = (key, value) => {
    let index = hash2(key)
    table[index].push({key, value})
  }

  const get = (key) => {
    let index = hash2(key);
    for (let i = 0; i < table[index].length; i++) {
      if (table[index][i].key === key) return table[index][i]
    }
  };

  const printAll = () => { console.log(table) }
  
  return {
    size,
    table,
    hash1,
    hash2,
    set,
    get,
    printAll,
  };
}

let myHashTable = hashTable(6)
myHashTable.set(11424, 'Mike')
myHashTable.set(6254, "James");
myHashTable.set(554, "Kevin");
myHashTable.set(4174, "Drake");
console.log(myHashTable.get(4174))
myHashTable.printAll()
```
```json
{ key: 4174, value: 'Drake' }
[
  [],
  [ { key: 6254, value: 'James' } ],
  [ { key: 11424, value: 'Mike' }, { key: 554, value: 'Kevin' } ],
  [],
  [ { key: 4174, value: 'Drake' } ],
  []
]
```