window.onload = function() {
    const kenny = document.getElementById("kenny");
    const sten = document.getElementById("sten");

    const ctx1 = kenny.getContext("2d");
    const ctx2 = sten.getContext("2d");

    drawKenny(ctx1);
    drawSten(ctx2);
};



function drawKenny(ctx) {
    // Kenny
	
	// legs
	ctx.beginPath();
	ctx.fillStyle = 'rgb(209, 100, 39)';
	ctx.rect(44, 208, 100, 24);
	ctx.closePath();
	ctx.fill();
	
	// jacket
    ctx.beginPath();
	ctx.fillStyle = 'rgb(190, 93, 37)';
	ctx.moveTo(37, 143);
	ctx.lineTo(19, 197);
	ctx.bezierCurveTo(19, 197, 30, 219, 95, 218);
	ctx.bezierCurveTo(166, 217, 172, 196, 172, 196);
	ctx.lineTo(149, 143);
	ctx.closePath();
	ctx.fill();
	
	// zipper
	ctx.beginPath();
	ctx.fillStyle = 'black';
	ctx.rect(95, 173, 2, 44);
	ctx.closePath();
	ctx.fill();
	
	// left hand
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.moveTo(44, 180);
	ctx.lineTo(38, 197);
	ctx.lineTo(40, 198);
	ctx.bezierCurveTo(40, 198, 44, 186, 44, 180);
	ctx.closePath();
	ctx.fill();
	
	// right hand
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.moveTo(147, 181);
	ctx.lineTo(153, 200);
	ctx.lineTo(151, 200);
	ctx.bezierCurveTo(151, 200, 145, 190, 146, 181);
	ctx.closePath();
	ctx.fill();
	
	// boots
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.rect(38, 228, 111, 5);
	ctx.closePath();
	ctx.fill();
	
	// head
	ctx.beginPath();
	ctx.fillStyle = 'rgb(209, 100, 39)';
	ctx.arc(92, 89, 85, 0, 2 * Math.PI, 1);
	ctx.closePath();
	ctx.fill();
	
	// left fist
	ctx.beginPath();
	ctx.fillStyle = 'rgb(101, 66, 37)';
	ctx.arc(27, 200, 12, 0, 2 * Math.PI, 1);
	ctx.closePath();
	ctx.fill();
	
	// right fist
	ctx.beginPath();
	ctx.fillStyle = 'rgb(101, 66, 37)';
	ctx.arc(162, 201, 12, 0, 2 * Math.PI, 1);
	ctx.closePath();
	ctx.fill();
	
	// left finger
	ctx.beginPath();
	ctx.fillStyle = 'rgb(76, 48, 24)';
	ctx.arc(36, 197, 4, 0, 2 * Math.PI, 1);
	ctx.closePath();
	ctx.fill();
	
	// right finger
	ctx.beginPath();
	ctx.fillStyle = 'rgb(76, 48, 24)';
	ctx.arc(155, 198, 4, 0, 2 * Math.PI, 1);
	ctx.closePath();
	ctx.fill();
	
	// face
	ctx.beginPath();
	ctx.fillStyle = 'rgb(232, 212, 175)';
	ctx.lineWidth = 0.342427;
	ctx.moveTo(91, 42);
	ctx.bezierCurveTo(114, 42, 133, 63, 133, 89);
	ctx.bezierCurveTo(133, 115, 114, 136, 91, 136);
	ctx.bezierCurveTo(68, 136, 49, 115, 49, 89);
	ctx.bezierCurveTo(49, 63, 68, 42, 91, 42);
	ctx.closePath();
	ctx.fill();
	
	// hood
	ctx.beginPath();
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 1;
	ctx.moveTo(92, 43);
	ctx.bezierCurveTo(125, 43, 152, 66, 152, 95);
	ctx.bezierCurveTo(152, 125, 125, 148, 92, 148);
	ctx.bezierCurveTo(59, 148, 32, 125, 32, 95);
	ctx.bezierCurveTo(32, 66, 59, 43, 92, 43);
	ctx.stroke();
	ctx.save();
	ctx.transform(1.22, 0.42, -0.36, 1.05, 173.94, -129.41);
	
	// left eye
	ctx.save();
	ctx.beginPath();
	ctx.transform(0.92, -0.37, 0.12, 1, 0, 0);
	ctx.fillStyle = 'rgb(241, 242, 241)';
	ctx.moveTo(-50.154449, 177.167442);
	ctx.bezierCurveTo(-41, 177, -33, 187, -33, 200);
	ctx.bezierCurveTo(-33, 212, -40, 223, -50, 223);
	ctx.bezierCurveTo(-59, 223, -66, 212, -66, 200);
	ctx.bezierCurveTo(-66, 187, -59, 177, -50, 177);
	ctx.closePath();
	ctx.fill();	
	ctx.restore();
 
	ctx.save();
	ctx.beginPath();
	ctx.transform(-0.95, 0.37, 0.44, 0.9, 0, 0);
	ctx.fillStyle = 'rgb(241, 242, 241)';
	ctx.moveTo(80, 172);
	ctx.bezierCurveTo(89, 172, 96, 182, 96, 194);
	ctx.bezierCurveTo(96, 206, 89, 216, 80, 216);
	ctx.bezierCurveTo(71, 216, 63, 206, 63, 194);
	ctx.bezierCurveTo(63, 182, 71, 172, 80, 172);
	ctx.fill();	ctx.restore(); ctx.restore();
	
	// left hood
	ctx.beginPath();
	ctx.fillStyle = 'rgb(98, 62, 31)';
	ctx.lineWidth = 1;
	ctx.moveTo(92, 42);
	ctx.bezierCurveTo(91, 42, 48, 44, 41, 75);
	ctx.bezierCurveTo(34, 107, 47, 121, 49, 123);
	ctx.bezierCurveTo(70, 139, 93, 136, 93, 136);
	ctx.bezierCurveTo(93, 136, 55, 119, 55, 90);
	ctx.bezierCurveTo(55, 62, 91, 42, 91, 42);
	ctx.closePath();
	ctx.fill();
	
	// right hood
	ctx.beginPath();
	ctx.fillStyle = 'rgb(98, 62, 31)';
	ctx.lineWidth = 1;
	ctx.moveTo(91, 42);
	ctx.bezierCurveTo(91, 42, 135, 44, 142, 75);
	ctx.bezierCurveTo(149, 107, 136, 121, 133, 123);
	ctx.bezierCurveTo(113, 139, 90, 136, 90, 136);
	ctx.bezierCurveTo(90, 136, 127, 119, 127, 90);
	ctx.bezierCurveTo(127, 62, 91, 42, 91, 42);
	ctx.closePath();
	ctx.fill();
	
	// чёрткочка между глаз
	ctx.save();
	ctx.beginPath();
	ctx.transform(-0.95, -0.29, -0.28, 0.96, 0, 0);
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 1;
	ctx.moveTo(-110, 48);
	ctx.bezierCurveTo(-109, 52, -111, 56, -113, 59);
	ctx.stroke();
	ctx.restore();
	
	// left pupil
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.arc(78, 86, 2.5, 0, 2 * Math.PI, 1);
	ctx.fill();
	
	// right pupil
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.arc(100, 86, 2.5, 0, 2 * Math.PI, 1);
	ctx.fill();
	
	// left lace
	ctx.save();
	ctx.beginPath();
	ctx.transform(0.95, -0.3, 0.3, 0.95, 0, 0);
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 1;
	ctx.rect(46, 157, 1, 30);
	ctx.fill();
	ctx.restore();
	
	// right lace
	ctx.save();
	ctx.beginPath();
	ctx.transform(0.97, 0.23, -0.22, 0.97, 0, 0);
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.lineWidth = 0.5;
	ctx.rect(119, 111, 1, 21);
	ctx.fill();	ctx.restore();   
}

function drawSten(ctx) {
	//Sten	

	// pants
	ctx.beginPath();
	ctx.fillStyle = 'rgb(99, 118, 158)';
	ctx.rect(28, 222, 106, 19);
	ctx.fill();

	// jacket
	ctx.beginPath();
	ctx.fillStyle = 'rgb(144, 100, 85)';
	ctx.moveTo(31, 145);
	ctx.bezierCurveTo(31, 145, 15, 167, 12, 176);
	ctx.bezierCurveTo(9, 184, 5, 205, 13, 212);
	ctx.bezierCurveTo(20, 219, 26, 229, 80, 229);
	ctx.bezierCurveTo(134, 229, 145, 218, 150, 206);
	ctx.bezierCurveTo(156, 195, 126, 145, 126, 145);
	ctx.closePath();
	ctx.fill();

	// left hand
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.moveTo(30, 184);
	ctx.lineTo(25, 202);
	ctx.lineTo(28, 203);
	ctx.closePath();
	ctx.fill();

	// right hand
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.moveTo(125, 185);
	ctx.lineTo(130, 207);
	ctx.lineTo(132, 205);
	ctx.closePath();
	ctx.fill();

	// zipper
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.moveTo(80, 182);
	ctx.lineTo(79, 229);
	ctx.lineTo(81, 229);
	ctx.lineTo(82, 182);
	ctx.closePath();
	ctx.fill();

	// stud1
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.arc(73, 187, 2, 0, 2 * Math.PI, 1);
	ctx.fill();

	// stud2
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.arc(74, 204, 2, 0, 2 * Math.PI, 1);
	ctx.fill();

	// stud3
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.arc(73, 219, 2, 0, 2 * Math.PI, 1);
	ctx.fill();

	// boots
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.rect(16, 238, 130, 7);
	ctx.fill();

	// воротник1
	ctx.save();
	ctx.beginPath();
	ctx.transform(0.9, 0.4, -0.4, 0.9, 0, 0);
	ctx.fillStyle = 'rgb(177, 29, 64)';
	ctx.moveTo(117, 127);
	ctx.bezierCurveTo(133, 127, 145, 130, 145, 134);
	ctx.bezierCurveTo(145, 137, 133, 140, 117, 140);
	ctx.bezierCurveTo(102, 140, 89, 137, 89, 134);
	ctx.bezierCurveTo(89, 130, 102, 127, 117, 127);
	ctx.fill();
	ctx.restore();

	// воротник2
	ctx.save();
	ctx.beginPath();
	ctx.transform(0.9, -0.4, 0.4, 0.9, 0, 0);
	ctx.fillStyle = 'rgb(177, 29, 64)';
	ctx.moveTo(26, 192);
	ctx.bezierCurveTo(41, 192, 54, 195, 54, 198);
	ctx.bezierCurveTo(54, 202, 41, 205, 26, 205);
	ctx.bezierCurveTo(10, 205, -1, 202, -1, 198);
	ctx.bezierCurveTo(-1, 195, 10, 192, 26, 192);
	ctx.fill();
	ctx.restore();

	// left hand
	ctx.beginPath();
	ctx.fillStyle = 'rgb(177, 29, 64)';
	ctx.arc(18, 209, 11, 0, 2 * Math.PI, 1);
	ctx.fill();

	// right hand
	ctx.beginPath();
	ctx.fillStyle = 'rgb(177, 29, 64)';
	ctx.arc(141, 209, 11, 0, 2 * Math.PI, 1);
	ctx.fill();

	// 
	ctx.beginPath();
	ctx.fillStyle = 'rgb(158, 26, 57)';
	ctx.arc(27, 206, 4, 0, 2 * Math.PI, 1);
	ctx.fill();

	// right finger
	ctx.beginPath();
	ctx.fillStyle = 'rgb(158, 26, 57)';
	ctx.arc(133, 208, 3, 0, 2 * Math.PI, 1);
	ctx.fill();

	// face
	ctx.beginPath();
	ctx.fillStyle = 'rgb(232, 212, 184)';
	ctx.arc(79, 96, 78, 0, 2 * Math.PI, 1);
	ctx.fill();

	// hat
	ctx.beginPath();
	ctx.fillStyle = 'rgb(97, 114, 154)';
	ctx.moveTo(3, 80);
	ctx.bezierCurveTo(6, 61, 16, 44, 30, 33);
	ctx.bezierCurveTo(44, 21, 63, 14, 81, 15);
	ctx.bezierCurveTo(99, 15, 117, 22, 130, 34);
	ctx.bezierCurveTo(144, 45, 153, 62, 156, 80);
	ctx.fill();

	// загиб у шапки
	ctx.beginPath();
	ctx.fillStyle = 'rgb(189, 31, 74)';
	ctx.moveTo(1, 90);
	ctx.lineTo(0, 76);
	ctx.bezierCurveTo(0, 76, 32, 64, 81, 64);
	ctx.bezierCurveTo(129, 64, 158, 75, 158, 75);
	ctx.lineTo(158, 90);
	ctx.bezierCurveTo(158, 90, 138, 80, 81, 80);
	ctx.bezierCurveTo(23, 80, 1, 90, 1, 90);
	ctx.closePath();
	ctx.fill();

	// pompon
	ctx.beginPath();
	ctx.fillStyle = 'rgb(189, 31, 74)';
	ctx.arc(75, 15, 14, 0, 2 * Math.PI, 1);
	ctx.fill();

	// left eye
	ctx.save();
	ctx.beginPath();
	ctx.transform(0.81, 0.58, -0.58, 0.81, 0, 0);
	ctx.fillStyle = 'rgb(255, 255, 255)';
	ctx.moveTo(110, 25);
	ctx.bezierCurveTo(122, 25, 131, 36, 131, 49);
	ctx.bezierCurveTo(131, 62, 122, 73, 110, 73);
	ctx.bezierCurveTo(99, 73, 90, 62, 90, 49);
	ctx.bezierCurveTo(90, 36, 99, 25, 110, 25);
	ctx.fill();	ctx.restore();

	// right eye
	ctx.save();
	ctx.beginPath();
	ctx.transform(0.75, -0.66, 0.66, 0.75, 0, 0);
	ctx.fillStyle = 'rgb(255, 255, 255)';
	ctx.moveTo(8, 122);
	ctx.bezierCurveTo(19, 122, 29, 133, 29, 146);
	ctx.bezierCurveTo(29, 159, 19, 169, 8, 169);
	ctx.bezierCurveTo(-2, 169, -12, 159, -12, 146);
	ctx.bezierCurveTo(-12, 133, -2, 122, 8, 122);
	ctx.fill();	ctx.restore();

	// чёрткочка между глаз
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.moveTo(82, 94);
	ctx.bezierCurveTo(82, 94, 81, 99, 81, 101);
	ctx.bezierCurveTo(81, 104, 82, 108, 82, 108);
	ctx.lineTo(82, 108);
	ctx.bezierCurveTo(82, 108, 82, 104, 82, 101);
	ctx.bezierCurveTo(81, 99, 82, 95, 82, 95);
	ctx.closePath();
	ctx.fill();

	// left pupil
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.arc(69, 103, 2, 0, 2 * Math.PI, 1);
	ctx.fill();

	// right pupil
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.arc(94, 103, 2, 0, 2 * Math.PI, 1);
	ctx.fill();

	// mouth
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.moveTo(68, 151);
	ctx.bezierCurveTo(68, 151, 76, 154, 82, 153);
	ctx.bezierCurveTo(88, 153, 95, 150, 95, 150);
	ctx.lineTo(94, 149);
	ctx.bezierCurveTo(94, 149, 89, 152, 83, 152);
	ctx.bezierCurveTo(76, 152, 68, 149, 68, 149);
	ctx.closePath();
	ctx.fill();
}