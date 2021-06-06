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
    RA = parseFloat(document.getElementById('ra-insert').value)
    RB = parseFloat(document.getElementById('rb-insert').value)
    RC = parseFloat(document.getElementById('rc-insert').value)
    R1 = (RB*RC)/(RA+RB+RC)
    R2 = (RA*RC)/(RA+RB+RC)
    R3 = (RA*RB)/(RA+RB+RC)
    if (Number.isNaN(R1)){
        incomplete()
    }
    else{
        r1.textContent = "R1 = " + R1
        r2.textContent = "R2 = " + R2
        r3.textContent = "R3 = " + R3
    }
}

function calculateDelta(){
    R1 = parseFloat(document.getElementById('r1-insert').value)
    R2 = parseFloat(document.getElementById('r2-insert').value)
    R3 = parseFloat(document.getElementById('r3-insert').value)
    RA = (R1*R2+R2*R3+R3*R1)/R1
    RB = (R1*R2+R2*R3+R3*R1)/R2
    RC = (R1*R2+R2*R3+R3*R1)/R3
    if (Number.isNaN(RA)){
        incomplete()
    }
    else{
        ra.textContent = "R1 = " + RA
        rb.textContent = "R2 = " + RB
        rc.textContent = "R3 = " + RC
    }
}

function incomplete(){
    alert("Incomplete information given for calculation")
}