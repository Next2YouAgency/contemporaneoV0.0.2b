<!-- Modal Logged in-->
<div class="modal fade in text-muted" id="modalLoggedIn" tabindex="1" role="dialog" aria-labelledby="myModalLabel" style="display: block;margin-top:15%">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">Usuário Logado</h4>
            </div>
            <div class="modal-body">
                <div>
                    <div class="col-md-10 col-md-push-1 text-center" style="padding-left: 0;padding-right: 0">
                        <img src="img/hourglass.gif" class="img-responsive" width="100"style="margin:0 auto;">
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-md-10 col-md-push-1 text-center" style="margin-top: 30px">
                        Processando os dados encontrados...<br>
                        Usuário: <?php echo $_SESSION['Login']['usuario'] ?><br>
                        Nome: <?php echo $_SESSION['Login']['nome'] ?>
                    </div>
                    <div class="clearfix"></div>
                    <meta http-equiv="refresh" content="2;home.php">
                </div>
            </div>
        </div>
    </div>
</div>