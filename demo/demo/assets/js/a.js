var page = {
  language: 'en',
  data: code,
  dataSet: {
    country: 'China',
    code: '0086',
  },
  init: function () {
    var _this = this;

    //设置默认区号
    $('#country').val(_this.dataSet.country);
    $('#area_code').val(_this.dataSet.code);

    //区号输入框输入事件
    $('#area_code').on('input propertychange', function () {
      var code = $(this).val();
      var result = [];
      $('#country').val('');
      $('#dropCon').removeClass('up').slideUp(0);
      if (code == '') return;
      _this.data.forEach(function (item) {
        if (item.code.indexOf(code) > -1) {
          result.push({
            code: item.code,
            name: item[_this.language]
          })
        }
      });
      if (result.length) {
        if (result.length > 1) {
          var str = '';
          result.forEach(function (item) {
            str += '<li data-code=' + item.code + '>' + item.name + '</li>';
          })
          $('#dropCon').addClass('up').html(str).slideDown(300);
        } else {
          $('#country').val(result[0].name);
        }
      }
    });

    //国家输入框输入事件
    $('#country').on('input propertychange', function () {
      var name = $(this).val(),
        str = '';
      name = name.replace(/\./g, "\\.");
      name = name.replace(/\(|\（/g, "\\(");
      name = name.replace(/\)|\）/g, "\\)");
      try {
        var reg = new RegExp(name, "gim");
      } catch (err) {
        return;
      }
      _this.data.forEach(function (item) {
        if (name && item[_this.language].match(reg)) {
          str += '<li data-code=' + item.code + '>' + item[_this.language] + '</li>';
        }
      });
      $('#area_code').val('');
      $('#dropCon').html(str);
      if ($('#dropCon').hasClass('up')) {
        $('#dropCon').removeClass('up');
      }
      if (str) {
        $('#dropCon').slideDown(300);
      } else {
        $('#dropCon').slideUp(300);
      }
    });

    // 点击下拉框按钮
    $('#dropDown').on('click', function () {
      var str1 = '',
        str2 = '';
      //已输入区号已匹配
      _this.data.forEach(function (item) {
        if (item.code === $('#area_code').val()) {
          str1 += '<li data-code=' + item.code + '>' + item[_this.language] + '</li>';
        }
      });
      //输入的区号未匹配
      _this.data.forEach(function (item) {
        str2 += '<li data-code=' + item.code + '>' + item[_this.language] + '</li>';
      });
      if (str1 != '' && $('#country').val() == '') {
        if ($('#dropCon').hasClass('up')) {
          $('#dropCon').removeClass('up').slideUp(0);
        } else {
          $('#dropCon').html(str1).slideToggle(300);
        }
      } else {
        if ($('#dropCon').hasClass('up')) {
          $('#dropCon').removeClass('up').slideUp(0);
        } else {
          $('#dropCon').html(str2).slideToggle(300);
        }
      }
    });

    //下拉列表国家选择
    $(document).on('click', '#dropCon li', function () {
      var country = $(this).text(),
        code = $(this).data('code');
      $('#country').val(country);
      $('#area_code').val(code);
      if ($('#dropCon').hasClass('up')) {
        $('#dropCon').removeClass('up')
      }
      $('#dropCon').slideUp(0).html('');
    });
  },
  //验证国家名称和区号是否匹配
  checkCountryAndCode: function () {
    var _this = this,
      isRight = false,
      country = $.trim($('#country').val()),
      code = $.trim($('#area_code').val());
    this.data.forEach(function (item) {
      if (item[_this.language] === country && item["code"] === code) {
        isRight = true;
        return false;
      }
    });
    return isRight;
  }
}
page.init();