/*
 *  Copyright 2021-2022 高露
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package com.qlshouyu.rums.repository;

import com.qlshouyu.rums.domain.QiniuConfig;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

/**
 * @author 高露
 * @date 2021-12-31
 */
public interface QiNiuConfigRepository extends JpaRepository<QiniuConfig,Long> {

    /**
     * 编辑类型
     * @param type
     */
    @Modifying
    @Query(value = "update QiniuConfig set type = ?1")
    void update(String type);
}
