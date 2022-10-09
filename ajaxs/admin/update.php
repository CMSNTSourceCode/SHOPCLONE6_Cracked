<?php

define("IN_SITE", true);

require_once(__DIR__."/../../libs/db.php");
require_once(__DIR__."/../../libs/helper.php");
require_once(__DIR__.'/../../models/is_admin.php');

if ($CMSNT->site('status_demo') != 0) {
    die(json_encode(['status' => 'error','msg' => 'Không được dùng chức năng này vì đây là trang web demo']));
}
if (isset($_POST['action'])) {

    // EDIT NOTE store_fanpage
    if($_POST['action'] == 'changeStoreFanpage'){
        $isUpdate = $CMSNT->update("store_fanpage", [
            'note'  => check_string($_POST['note'])
        ], " `id` = '".check_string($_POST['id'])."' ");
        if($isUpdate){
            die(json_encode(['status' => 'success', 'msg' => 'Cập nhật thành công!']));
        }
        die(json_encode(['status' => 'error', 'msg' => 'Cập nhật thất bại']));
    }


    if($_POST['action'] == 'changeProductAPI'){
        $isUpdate = $CMSNT->update("products", [
            'price'  => check_string($_POST['price']),
            'cost'  => check_string($_POST['cost'])
        ], " `id` = '".check_string($_POST['id'])."' ");
        if($isUpdate){
            die(json_encode(['status' => 'success', 'msg' => 'Cập nhật thành công!']));
        }
        die(json_encode(['status' => 'error', 'msg' => 'Cập nhật thất bại']));
    }

    if($_POST['action'] == 'setDefaultCurrency'){
        $id = check_string($_POST['id']);
        $row = $CMSNT->get_row("SELECT * FROM `currencies` WHERE `id` = '$id' ");
        if (!$row) {
            $data = json_encode([
                'status'    => 'error',
                'msg'       => 'ID tiền tệ không tồn tại trong hệ thống'
            ]);
            die($data);
        }
        $CMSNT->update("currencies", [
            'default_currency' => 0
        ], " `id` > 0 ");
        $isUpdate = $CMSNT->update("currencies", [
            'default_currency' => 1
        ], " `id` = '$id' ");
        if ($isUpdate){
            $Mobile_Detect = new Mobile_Detect();
            $CMSNT->insert("logs", [
                'user_id'       => $getUser['id'],
                'ip'            => myip(),
                'device'        => $Mobile_Detect->getUserAgent(),
                'createdate'    => gettime(),
                'action'        => 'Set mặc định tiền tệ ('.$row['name'].' ID '.$row['id'].')'
            ]);
            $data = json_encode([
                'status'    => 'success',
                'msg'       => 'Thay đổi trạng thái tiền tệ thành công'
            ]);
            die($data);
        }else{
            die(json_encode(['status' => 'error', 'msg' => 'Cập nhật thất bại']));
        }
    }



    
} 
 

$data = json_encode([
    'status'    => 'error',
    'msg'       => 'Dữ liệu không hợp lệ'
]);
die($data);

