$(function () {


    let e1t = "돌담을 지나 세로로 긴 문 사이로 하늘, 벽, 물, 용 모양의 상징물과 태양의 움직임에 따라 하늘을 담는 물의 반사가 달라지면서 대자연의 움직임을 느껴보는공간입니다."

    let e2t = "형태로, 소리로, 분명히 존재할 수 있도록 수풀 사이에 헛간의 모습을 하고 있는 풍 박물관은적송을 판으로 이어 바람이 드나들 수 있도록 하였습니다. 판자 사이를 자유롭게 드나드는 바람의 노랫소리로 바람이 이 건축물에 계속 머무르고바람의 방향과 세기를 전달합니다."

    let etext = $(".etext")
    let big = $(".big");
    let e1i = $(".e1");
    let e2i = $(".e2");
    let e3i = $(".e3");


    e2i.click(function () {

        etext.text(`${e2t}`);
        big.attr("src","./img/e2.png")

    });

});