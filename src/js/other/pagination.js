export function pagination() {
    console.log('pagination works');

    $(function () {
        (function (name) {
          var container = $('#pagination-' + name);
          if (!container.length) return;
          var sources = function () {
            var result = [];
    
            for (var i = 1; i < 196; i++) {
              result.push(i);
            }
    
            return result;
          }();
    
          var options = {
            dataSource: sources,
            callback: function (response, pagination) {
              // window.console && console.log(response, pagination);
    
              var dataHtml = '<ul>';
    
              $.each(response, function (index, item) {
                dataHtml += '<li>' + item + '</li>';
              });
    
              dataHtml += '</ul>';
    
              container.prev().html(dataHtml);
            }
          };
    
          //$.pagination(container, options);
    
          container.addHook('beforeInit', function () {
            window.console && console.log('beforeInit...');
          });
          container.pagination(options);
    
          container.addHook('beforePageOnClick', function () {
            window.console && console.log('beforePageOnClick...');
            //return false
          });
        })('demo1');
    
        (function (name) {
          var container = $('#pagination-' + name);
          if (!container.length) return;
          var sources = function () {
            var result = [];
    
            for (var i = 1; i < 196; i++) {
              result.push(i);
            }
    
            return result;
          }();
    
          var options = {
            dataSource: sources,
            pageSize: 10,
            showGoInput: true,
            showGoButton: true,
            showNavigator: true,
            showSizeChanger: true,
            formatNavigator: '<%= rangeStart %>-<%= rangeEnd %> of <%= totalNumber %> items',
            callback: function (response, pagination) {
              // window.console && console.log(response, pagination);
    
              var dataHtml = '<ul>';
    
              $.each(response, function (index, item) {
                dataHtml += '<li>' + item + '</li>';
              });
    
              dataHtml += '</ul>';
    
              container.prev().html(dataHtml);
            }
          };
    
          //$.pagination(container, options);
    
          container.addHook('beforeInit', function () {
            window.console && console.log('beforeInit...');
          });
          container.pagination(options);
    
          container.addHook('beforePageOnClick', function () {
            window.console && console.log('beforePageOnClick...');
            //return false
          });
        })('demo2');
    
        (function (name) {
          var container = $('#pagination-' + name);
          if (!container.length) return;
          container.pagination({
            dataSource: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
            locator: 'items',
            pageNumber: 2,
            totalNumber: 120,
            pageSize: 20,
            ajax: {
              beforeSend: function () {
                container.prev().html('Loading data from flickr.com ...');
              }
            },
            callback: function (response, pagination) {
              // window.console && console.log(22, response, pagination);
              var dataHtml = '<ul>';
    
              $.each(response, function (index, item) {
                dataHtml += '<li>' + item.title + '</li>';
              });
    
              dataHtml += '</ul>';
    
              container.prev().html(dataHtml);
            }
          })
        })('demo3');
    
        (function (name) {
          var container = $('#pagination-' + name);
          var sources = function () {
            var result = [];
    
            for (var i = 1; i < 196; i++) {
              result.push(i);
            }
    
            return result;
          }();
    
          if (!container.length) return;
          container.pagination({
            dataSource: sources,
            pageSize: 5,
            showPageNumbers: false,
            showNavigator: true,
            ajax: {
              beforeSend: function () {
                container.prev().html('Loading data from flickr.com ...');
              }
            },
    
            callback: function (response, pagination) {
              // window.console && console.log(response, pagination);
    
              var dataHtml = '<ul>';
    
              $.each(response, function (index, item) {
                dataHtml += '<li>' + item + '</li>';
              });
    
              dataHtml += '</ul>';
    
              container.prev().html(dataHtml);
            }
          })
        })('demo4');
      })
}