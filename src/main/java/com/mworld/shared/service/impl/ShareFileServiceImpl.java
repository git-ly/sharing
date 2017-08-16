package com.mworld.shared.service.impl;

import com.mworld.common.PageUtil;
import com.mworld.shared.dao.ShareFileDao;
import com.mworld.shared.po.ShareFile;
import com.mworld.shared.service.ShareFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by bolom on 2017/8/10.
 */
@Service
public class ShareFileServiceImpl implements ShareFileService {
    @Autowired
    private ShareFileDao shareFileDao;
    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Integer saveShareFile(ShareFile shareFile) {
        return shareFileDao.saveShareFile(shareFile);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public List<ShareFile> getShareFiles(String keyword, Integer start, Integer size) {
        PageUtil pageUtil = new PageUtil(start, size);
        return shareFileDao.getShareFiles(keyword, pageUtil.getStart(), pageUtil.getSize());
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Integer getShareFilesCnt(String keyword) {
        return shareFileDao.getShareFilesCnt(keyword);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Integer updateShareFile(ShareFile shareFile) {
        return shareFileDao.updateShareFile(shareFile);
    }

    @Override
    public ShareFile getShareFileById(String id) {
        return shareFileDao.getShareFileById(id);
    }
}
