<template></template>
<script>
    export default {
        name: 'Data',
        created: function () {
            const req = new XMLHttpRequest();

            req.onreadystatechange = () => {
                if (req.readyState === 4) { // 通信の完了時
                    if (req.status === 200) { // 通信の成功時
                        const json = JSON.parse(req.responseText);

                        this.$emit('GET_AJAX_COMPLETE', json);
                    }
                }
            };

            req.open('GET', '/data/task.json', true);
            req.send(null);
        }
    }
</script>