package com.mworld.shared.dao;

import com.mworld.shared.po.ShareFile;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by bolom on 2017/8/10.
 */
public interface ShareFileDao {

    public Integer saveShareFile(@Param("shareFile") ShareFile shareFile);

    public List<ShareFile> getShareFiles(@Param("keyword") String keyword, @Param("start") int start, @Param("size") int size);

    public Integer getShareFilesCnt(@Param("keyword") String keyword);

    public Integer updateShareFile(@Param("shareFile") ShareFile shareFile);

    public ShareFile getShareFileById(@Param("id") String id);
}
