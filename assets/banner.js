document.addEventListener('DOMContentLoaded', function() {
    var sectionId = '{{ section.id }}';

    var defaultData = {
        banner_background: 'default_banner_image.jpg',
        banner_head: 'Browse our latest products',
        banner_heading_link: '#',
        banner_des: 'Give customers details about the banner image(s) or content on the template',
        banner_description_link: '#',
        banner_button_text: 'SHOP NOW',
        banner_button_link: '#'
    };

    var sectionData = {
        banner_background: '{{ section.settings.banner_background | img_url: "master" }}',
        banner_head: '{{ section.blocks[0].settings.banner_head }}',
        banner_heading_link: '{{ section.blocks[0].settings.banner_heading_link }}',
        banner_des: '{{ section.blocks[1].settings.banner_des }}',
        banner_description_link: '{{ section.blocks[1].settings.banner_description_link }}',
        banner_button_text: '{{ section.blocks[2].settings.banner_button_text }}',
        banner_button_link: '{{ section.blocks[2].settings.banner_button_link }}'
    };

    initializeSection(sectionId, sectionData);

    function initializeSection(sectionId, data) {
        var section = document.getElementById('banner-' + sectionId);

        section.querySelector('.banner_img').style.backgroundImage = 'url(' + data.banner_background + ')';
        section.querySelector('.banner_heading').innerHTML = '<a href="' + data.banner_heading_link + '">' + data.banner_head + '</a>';
        section.querySelector('.banner_description').innerHTML = '<a href="' + data.banner_description_link + '">' + data.banner_des + '</a>';
        section.querySelector('.banner_button').innerHTML = '<a href="' + data.banner_button_link + '">' + data.banner_button_text + '</a>';
    }
});