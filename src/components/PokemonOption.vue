<template>
    <div class="option-container">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>

<p></p>

</template>

<script>
export default {

}
</script>

<style>

ul{
    list-style-type: none;
}

li{
    background-color: white;
    color: black;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 250px;
    margin-bottom: 10px;
    cursor: pointer;
}

li:hover{
    background-color: black;
    color: white;
}

.option-container{
    display: flex;
    justify-content: center;
}
</style>