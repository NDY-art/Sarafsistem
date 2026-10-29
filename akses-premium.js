(function(){
  'use strict';
  function config(){return window.MPI_SARAF_CONFIG||{};}
  function urlPremium(){
    try{const u=new URL(String(config().premiumUrl||'').trim());
      if(u.protocol==='https:' && u.hostname==='script.google.com' && !u.port && !u.username && !u.password && !u.search && !u.hash && /^\/(?:macros\/s|a\/macros\/[^/]+\/s)\/[A-Za-z0-9_-]+\/exec$/.test(u.pathname))return u.href;
    }catch(e){}return '';
  }
  function contact(){const n=String(config().salesWhatsapp||'').trim();return /^62\d{7,13}$/.test(n)?'https://wa.me/'+n+'?text='+encodeURIComponent('Halo, saya ingin informasi lisensi MPI Sistem Saraf Manusia.'):'';}
  window.MPITampilkanPremium=function(){const d=document.getElementById('premium-dialog');if(d&&!d.open)d.showModal();};
  window.MPIBukaPremium=function(){
    const url=urlPremium();
    // Navigasi tab yang sama menghindari masalah pop-up diblokir.
    if(url){window.location.assign(url);return;}
    const message=document.getElementById('premium-message');
    if(message){message.textContent='Akses premium belum tersedia. Silakan hubungi pengelola MPI.';message.hidden=false;window.MPITampilkanPremium();}
  };
  document.addEventListener('DOMContentLoaded',function(){
    const url=contact();document.querySelectorAll('[data-sales-contact]').forEach(function(a){a.hidden=!url;if(url){a.href=url;a.target='_blank';a.rel='noopener noreferrer';}});
  });
})();
