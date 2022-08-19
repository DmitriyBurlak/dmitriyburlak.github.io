<template>
    <div style="background-color: #fff;">

        <div class="db-codebox" ref="codebox">
            <pre>
            <code class="lang-js">// complete the game to continue
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 7));

fetch('https://no-such-server.blabla') // ошибка
.then(response => response.json())
.catch(err => alert(err)) // TypeError: failed to fetch (текст может отличаться)</code></pre>
        </div>


    </div>

</template>

<script>

export default {
    mounted() {
        this.highlight();


    },
    methods: {
        highlight() {
            let pre = this.$refs.codebox.firstChild;
            let code = pre.lastChild;
            let rows = code.textContent.split("\n");

            let rowList = document.createElement('ul');
            rowList.classList.add("db-codebox_row");

            rows.forEach((item, idx) => {
                let row = document.createElement('li');
                row.innerHTML = idx + 1;
                rowList.append(row);

                this.rowLight(item);
            })

            pre.prepend(rowList)
        },

        rowLight(row) {
            let index = 0;
            let lastIndex = row.length - 1;

            const punctuation = ["(", ")", ".", ";"]



            console.log(row.split(/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./));






            console.log("ROW - ", row, " - ", lastIndex,  row.indexOf(".then"), row.includes("function"));
        }
    }
}
</script>

<style lang="scss">
    .db-codebox {
        width: max-content;
        color: #607B96;

        &_row {
            text-align: end;
            padding-right: 25px;
            // border-right: 1px solid #607B96;
            // margin-right: 15px;
        }

        pre {
            padding: 20px;
            background-color: rgb(25, 24, 48);
            font: 15px/22px Consolas,Lucida Console,Menlo,Monaco,monospace;
            display: flex;
            justify-content: space-between;
        }

        code {
            // white-space: pre-line;
        }
    }
</style>