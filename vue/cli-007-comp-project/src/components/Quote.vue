<template>
    <div class="col-sm-6 col-md4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>


<script>
export default {    
}
</script>

<style scoped>
    .panel-body {
        font-family: Cambria, cursive;
        font-size: 24px;
        color: lightcoral;
    }
    
    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: lightblue;
    }

</style>
