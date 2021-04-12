# 问题汇总


github显示There isn’t anything to compare.
github中进行merge时需保证：低版本在前，高版本在后,并保证是2个分支是同1个commit。
否则会出现如上错误。
或者说分分支并不是从master中pull的，而是两个独立的分支当merge时也会出现如上问题。
理想分支情况：（注：master为主分支，add_db为分分支）

```shell script
git pull origin master/main --allow-unrelated-histories
```
之后再次push merge
