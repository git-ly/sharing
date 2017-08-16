package com.mworld.shared.service;

import com.mworld.shared.po.ShareFile;

import java.util.List;

/**
 * Created by bolom on 2017/8/10.
 */
public interface ShareFileService {
    public Integer saveShareFile(ShareFile shareFile);

    public List<ShareFile> getShareFiles(String keyword, Integer start, Integer size);

    public Integer getShareFilesCnt(String keyword);

    public Integer updateShareFile(ShareFile shareFile);

    public ShareFile getShareFileById(String id);
}
