var r1 = 0
var r2 = 0
var r3 = 0
var ra = 0
var rb = 0
var rc = 0

function main(){
    r1 = document.getElementById('r1')
    r2 = document.getElementById('r2')
    r3 = document.getElementById('r3')
    ra = document.getElementById('ra')
    rb = document.getElementById('rb')
    rc = document.getElementById('rc')
}

function calculateWye(){
    RA = math.evaluate(document.getElementById('ra-insert').value)
    RB = math.evaluate(document.getElementById('rb-insert').value)
    RC = math.evaluate(document.getElementById('rc-insert').value)
    R1 = math.divide(math.multiply(RB,RC),math.add(math.add(RA,RB),RC))
    R2 = math.divide(math.multiply(RA,RC),math.add(math.add(RA,RB),RC))
    R3 = math.divide(math.multiply(RA,RB),math.add(math.add(RA,RB),RC))
    console.log(RA)
    console.log(R1)
    if (Number.isNaN(R1)){
        incomplete()
    }
    else{
        r1.textContent = R1
        r2.textContent = R2
        r3.textContent = R3
    }
}

function calculateDelta(){
    R1 = math.evaluate(document.getElementById('r1-insert').value)
    R2 = math.evaluate(document.getElementById('r2-insert').value)
    R3 = math.evaluate(document.getElementById('r3-insert').value)
    Ru = math.add(math.add(math.multiply(R1,R2),math.multiply(R3,R2)),math.multiply(R1,R3))
    RA = math.divide(Ru,R1)
    RB = math.divide(Ru,R2)
    RC = math.divide(Ru,R3)
    if (Number.isNaN(RA)){
        incomplete()
    }
    else{
        ra.textContent = RA
        rb.textContent = RB
        rc.textContent = RC
    }
}

function incomplete(){
    alert("Incomplete information given for calculation")
}
