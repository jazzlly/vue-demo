namespace ProtoDemo {

    /*
    使用一组函数表示一个属性
    */
    let circle = {
        x: 0.0,
        y: 0.0,
        radius: 5,
        
        get area() : number {
            return Math.PI * this.radius * this.radius
        },

        // 没有setter就是只读属性
        set area(v : number) {
            this.radius = Math.sqrt(v/Math.PI)
        }
    }

    // console.info(circle.area);
    // circle.area = 4 * circle.area
    // console.info(circle);


    let c2 = Object.create(circle)
    c2.radius = 1
    // console.info(c2);
    // console.info(c2.area);
    
    let autoinc = {
        // $表示私有属性
        $n: 0,
        
        get next() : number {
            return ++(this.$n)
        }
    }

    // console.info(autoinc.next);
    // console.info(autoinc.next);
}