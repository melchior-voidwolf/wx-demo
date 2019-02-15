
const getRandomPic = () => `/img/${~~(Math.random()*10)}.jpg`
const getRandomId = () => `id-${~~(Math.random() * 20)}`

const getRandomUser = () => {
  const id = getRandomId()
  return {
    id,
    name: 'homunculus' + id,
    avator: getRandomPic()
  }
}

const wlDemo = {
  uri: 'http://www.zuimoban.com/jiaocheng/htmlcss/11742.html',
  intro: 'eva新剧场版真的发布了（并没有）',
  icon: getRandomPic()
}

const getRandomComment = () => `第二次冲击十五年后的2015年，不明巨型生命体“使徒”在日本登陆，并向第3新东京市袭来。联合国军与使徒的作战失败，作战指挥权移至NERV。本作主人公碇真嗣被父亲・NERV总司令碇源堂召唤而来，NERV作战部长葛城美里带其到地下都市NERV总部，最后真嗣半推半就地驾驶着巨大人型兵器EVA初号机与使徒对抗。在没有受过任何训练的情况下，真嗣在战斗中很快不堪重负，导致初号机暴走，并以残酷野蛮的方式重创使徒，随后使徒自爆。之后真嗣在第3新东京市展开新生活，并在美里的提议下搬到美里家居住。

使徒不断地出现，在迎击使徒的过程中，真嗣结识了学校同学铃原冬二、相田剑介；并与同是驾驶员的绫波丽、明日香联手消灭使徒。EVA3号机在启动试验中被使徒入侵，真嗣顾虑3号机内的驾驶员而不敢攻击，但在碇源堂的命令下真嗣的操纵被强制切断，搭载替代操纵系统的初号机将3号机残忍撕裂并重伤驾驶员铃原冬二。此次事件使真嗣决定不再驾驶EVA并打算离开第3新东京市。然而新出现的使徒打倒了明日香和绫波丽继而攻进NERV总部，之后真嗣再次乘上初号机，最终觉醒的初号机将使徒吞食，在吞食过程中吞下该使徒的S2机关，获得了维持自身自主行动而不需要电源的辅助的能力。另一方面，碇源堂与SEELE对人类补完计划的分歧显现、关系急剧恶化。

使徒开始尝试与人类接触并发动心理攻击。明日香因使徒的精神攻击而崩溃，绫波丽为消灭使徒选择了自爆。之后失神的明日香被送入病院，绫波是克隆人的事被真嗣得知，同学也已离开，孤独的真嗣遇到了渚薰。渚薰以第五适格者的身份被SEELE送到NERV接替明日香，出现后不久便成功打破真嗣的心之壁。但渚薰却是最后的使徒，真嗣必须杀死他。虽然渚薰会灭亡人类而且他自己也期望死亡，但真嗣仍陷入深深地自责。

电视版25&26

电视版结局中，故事发展的描写较少，而是关注人物的心理问题、直接描写真嗣的内心世界。人类补完计划实行，所有人类的心合而为一，真嗣开始内心的补完。在自由的世界中，真嗣描绘了一个没有EVA存在、充满和平日常生活的世界，最终意识到现实世界拥有众多可能性。这时候，真嗣的世界豁然开朗，大家都向真嗣祝贺“恭喜你”。
剧场版25&26

《剧场版》中，SEELE开始入侵NERV的MAGI系统、挑动日本派出战略自卫队抹杀NERV，最后派出9台EVA量产机攻击觉醒的明日香驾驶的贰号机。真嗣在美里的鼓励下再次乘上初号机，在看到被肢解的贰号机后再次陷入混乱。随后补完开始、引发第三次冲击，所有人合而为一。然而，真嗣仍然期望他人存在的世界；最后，真嗣和明日香两个人躺在沙滩上。
电视版动画以跳脱了剧情框架的型态完结。播放结束后的次年，重新制作的最终两话以《新世纪福音战士剧场版：THE END OF EVANGELION》的形式公映。因此《EVA》(1995-1997)有两个结局[13]。`
  .split('\n').filter(_ => Math.random() > 0.7).join('\n')


const gen = () => [...'1'.repeat(10)].map((_, i) => {
  const tempUser = getRandomUser()
  return ({
    user: getRandomUser(),
    momentText: getRandomComment(),
    picList: [...'1'.repeat(i)].slice(0,8).map(_ => ({
      id: Math.random(),
      name: 'demo.jpg',
      uri: getRandomPic()
    })),
    weblink: Math.random() > 0.7 ? wlDemo : null,
    id: Math.random(),
    created: new Date().getTime() * (1 - 0.00001*Math.random()),
    from: Math.random() > 0.8 ? '微博APP' : null,
    friendComments: [
      { user: tempUser, to: null, comment: 'eva真好看，下次有机会一起去国外看剧场版' },
      { user: getRandomUser(), to: tempUser, comment: '好啊' },
    ],
    likeList: [
      getRandomUser(), getRandomUser(), getRandomUser(), getRandomUser()
    ]
  })
}).sort((a, b) => b.created - a.created)

const getMoments = gen

export default getMoments

